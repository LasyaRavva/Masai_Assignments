# Node.js Architecture - Detailed Explanation

## 1. Node.js Architecture Overview

Node.js is built on a layered architecture that enables JavaScript to run outside the browser environment. The architecture consists of several key components working together to provide high-performance, non-blocking I/O operations.

### JavaScript Engine (V8)

- **V8** is Google's open-source JavaScript engine written in C++, originally developed for Chrome browser
- It compiles JavaScript code directly into machine code instead of interpreting it, making execution extremely fast
- V8 handles memory allocation and garbage collection automatically, managing the heap where objects are stored
- It provides the runtime environment where JavaScript code actually executes
- V8 doesn't understand Node.js-specific features like file system access or network operations - it only knows pure JavaScript
- The engine uses Just-In-Time (JIT) compilation to optimize code during runtime, converting hot code paths into highly optimized machine code

### Node.js Core APIs

- These are JavaScript libraries that provide high-level interfaces for common operations
- Core APIs include modules like `fs` (file system), `http` (networking), `crypto` (cryptography), `path`, `stream`, etc.
- They are written in JavaScript and provide a developer-friendly interface
- Core APIs act as a bridge between JavaScript code and the lower-level native bindings
- These APIs handle validation, error formatting, and provide synchronous/asynchronous versions of operations
- They are part of Node.js standard library and don't require installation

### Native Bindings

- Native bindings are the glue layer that connects JavaScript code to C++ code
- They translate JavaScript function calls into C++ function calls that can interact with the operating system
- Written in C++ using Node.js APIs and V8 APIs
- They provide access to low-level system operations that JavaScript cannot perform directly
- Native bindings wrap libuv functions and expose them to JavaScript through the Core APIs
- They handle data type conversions between JavaScript types and C++ types

### Event Loop

- The Event Loop is the mechanism that makes Node.js non-blocking and asynchronous
- It's a single-threaded loop that continuously monitors and processes events from various queues
- The Event Loop allows Node.js to handle thousands of concurrent operations without creating multiple threads
- It orchestrates the execution of callbacks, promises, and async operations
- Works in phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks
- Each phase has its own queue of callbacks to execute
- The Event Loop delegates heavy operations to libuv's thread pool while continuing to process other events

### libuv

- libuv is a multi-platform C library that provides asynchronous I/O operations
- It was originally developed specifically for Node.js but is now used by other projects
- libuv abstracts away operating system differences, providing a consistent interface across Windows, Linux, and macOS
- It implements the Event Loop mechanism that Node.js uses
- Manages the thread pool for operations that cannot be done asynchronously at the OS level
- Handles file system operations, DNS lookups, network I/O, child processes, and more

---

## 2. What is libuv?

### Definition and Purpose

- **libuv** is a cross-platform support library written in C that focuses on asynchronous I/O
- The name comes from "lib" (library) and "uv" (unicorn velociraptor - chosen because it's cool and memorable)
- It provides an event-driven architecture based on event loops and callback functions
- Acts as the foundation layer that makes Node.js truly asynchronous and non-blocking
- Handles platform-specific differences so Node.js code works identically across different operating systems

### Why Node.js Needs libuv

- **JavaScript is single-threaded**: Without libuv, Node.js would block on every I/O operation, making it impractical for real-world applications
- **Operating system differences**: Different OS platforms handle I/O differently (epoll on Linux, kqueue on macOS, IOCP on Windows) - libuv abstracts these differences
- **Asynchronous operations**: Many operations like file I/O don't have native asynchronous support in all operating systems - libuv provides this through its thread pool
- **Event-driven architecture**: libuv implements the event loop that allows Node.js to handle multiple operations concurrently on a single thread
- **Performance**: By using native async APIs where available and threading where necessary, libuv enables Node.js to achieve high performance
- **Scalability**: Allows a single Node.js process to handle thousands of concurrent connections efficiently

### Responsibilities of libuv

- **Event Loop Management**: Implements and manages the event loop that drives Node.js asynchronous behavior
- **File System Operations**: Handles all file system operations (read, write, watch, stat, etc.) using the thread pool
- **Network I/O**: Manages TCP, UDP, and pipe operations using native OS asynchronous capabilities
- **DNS Resolution**: Performs DNS lookups asynchronously using the thread pool
- **Child Process Management**: Handles spawning and communication with child processes
- **Timer Management**: Implements setTimeout, setInterval, and setImmediate functionality
- **Thread Pool Management**: Creates and manages a pool of worker threads for blocking operations
- **Signal Handling**: Manages Unix signals and Windows console events
- **TTY Operations**: Handles terminal/console input and output operations
- **File System Watching**: Monitors files and directories for changes

---

## 3. Thread Pool

### What is a Thread Pool?

- A **thread pool** is a collection of pre-initialized, reusable worker threads that wait for tasks to execute
- In Node.js, the default thread pool size is **4 threads**, but can be configured using `UV_THREADPOOL_SIZE` environment variable (up to 1024)
- These threads are separate from the main JavaScript execution thread
- Threads in the pool are created when Node.js starts and remain alive for the lifetime of the process
- When a blocking task arrives, it's assigned to an available thread; when complete, the thread becomes available again
- The thread pool is managed entirely by libuv, not by JavaScript code

### Why Node.js Uses a Thread Pool

- **Blocking Operations**: Some operations don't have native asynchronous APIs on all platforms and would block the main thread
- **CPU-Intensive Tasks**: Certain operations like cryptography are CPU-bound and would freeze the event loop if run on the main thread
- **Maintaining Responsiveness**: By offloading blocking work to separate threads, the main thread stays responsive
- **Platform Compatibility**: Ensures consistent asynchronous behavior across different operating systems
- **Preventing Event Loop Starvation**: Without thread pool, long-running operations would prevent the event loop from processing other events
- **Optimal Resource Utilization**: Allows Node.js to leverage multiple CPU cores for specific operations while maintaining single-threaded JavaScript execution

### Which Operations are Handled by the Thread Pool

1. **File System Operations (except FSEvents)**:
- Reading files (`fs.readFile`)
- Writing files (`fs.writeFile`)
- File stats (`fs.stat`)
- File operations (`fs.rename`, `fs.unlink`, etc.)

2. **DNS Lookups**:
- `dns.lookup()` - uses thread pool (but not `dns.resolve()` which uses network)

3. **Cryptography Operations**:
- `crypto.pbkdf2()` - password-based key derivation
- `crypto.randomBytes()` - random number generation
- `crypto.scrypt()` - password hashing

4. **Zlib Compression**:
- All compression and decompression operations
- `zlib.gzip()`, `zlib.deflate()`, etc.

5. **CPU-Intensive Tasks in Native Modules**:
- Custom native addons can use the thread pool for heavy computations

**Note**: Network operations (HTTP, TCP, UDP) do NOT use the thread pool - they use native asynchronous OS capabilities managed directly by libuv's event loop.

---

## 4. Worker Threads

### What are Worker Threads?

- **Worker Threads** are a feature introduced in Node.js v10.5.0 (stable in v12) through the `worker_threads` module
- They allow running JavaScript code in parallel threads separate from the main thread
- Each worker thread has its own V8 isolate (independent JavaScript engine instance) and event loop
- Workers can execute CPU-intensive JavaScript operations without blocking the main thread
- Communication between main thread and workers happens through message passing (via `postMessage()` and message events)
- Workers can share memory using `SharedArrayBuffer` for more efficient data exchange
- Unlike the thread pool, you explicitly create and manage worker threads in your code

### Why are Worker Threads Needed?

- **CPU-Intensive JavaScript Tasks**: When you need to perform heavy JavaScript computations (parsing large JSON, image processing, data analysis)
- **Parallel Processing**: To take advantage of multi-core CPUs for JavaScript-heavy operations
- **Preventing Main Thread Blocking**: Keep the application responsive while performing intensive calculations
- **JavaScript Context Required**: When the operation requires JavaScript execution (unlike thread pool which handles C++ operations)
- **Custom Parallel Logic**: When you need fine-grained control over parallel execution that the thread pool doesn't provide
- **Scaling Compute-Bound Work**: For applications that need to process large amounts of data in parallel

### Difference Between Thread Pool and Worker Threads

| Aspect | Thread Pool | Worker Threads |

**Purpose** Handle blocking I/O and native operations Execute JavaScript code in parallel

**Management**: Automatically managed by libuv Manually created and managed by developer

**JavaScript Context** No JavaScript engine - runs C++ code Each has its own V8 instance

**Default Size**: 4 threads (configurable via UV_THREADPOOL_SIZE) As many as you create (no default limit)

**Use Cases**: File I/O, DNS, crypto operations CPU-intensive JavaScript computations 

**Code Execution**: Executes native C++ functions Executes JavaScript code 

**Control** Implicit - happens automatically Explicit - you write the worker code 

**Communication** : Via callbacks to main thread Via message passing (postMessage) 

**Overhead** : Low - threads are pre-initialized Higher - each worker has its own V8 isolate 

**Availability** : Always available (part of libuv) Requires explicit `worker_threads` module 


## 5. Event Loop Queues

The Node.js event loop processes tasks from different queues with specific priorities. Understanding these queues is crucial for predicting code execution order.

### Macro Task Queue (Task Queue)

- **Definition**: Contains tasks that represent larger units of work, typically I/O operations and timers
- **Also called**: Task Queue or Callback Queue
- **Processing**: Executed one at a time in each iteration of the event loop
- **Characteristics**:
  - Lower priority compared to microtasks
  - Each macrotask allows microtasks to run after it completes
  - Represents heavier operations

**Examples of Macro Tasks**:
- `setTimeout()` callbacks
- `setInterval()` callbacks
- `setImmediate()` callbacks (Node.js specific)
- I/O operations (file reading, network requests)
- UI rendering events (in browsers)
- `requestAnimationFrame()` (in browsers)

### Micro Task Queue (Job Queue)

- **Definition**: Contains smaller, higher-priority tasks that should execute as soon as possible
- **Also called**: Job Queue
- **Processing**: All microtasks in the queue are executed before moving to the next macrotask
- **Characteristics**:
  - Higher priority than macrotasks
  - Executed immediately after the currently executing script
  - Can add more microtasks while processing, which will also execute before any macrotask

**Examples of Micro Tasks**:
- `Promise` callbacks (`.then()`, `.catch()`, `.finally()`)
- `queueMicrotask()` callbacks
- `process.nextTick()` callbacks (Node.js - highest priority)
- `async/await` continuations
- `MutationObserver` callbacks (in browsers)

### Execution Priority Between Queues

The execution order follows this hierarchy:

1. **Currently executing script** - Synchronous code runs first
2. **process.nextTick() queue** (Node.js only) - Highest priority, executes before any other async code
3. **Microtask Queue** - All promise callbacks and queueMicrotask callbacks
4. **Macrotask Queue** - One macrotask (timers, I/O, setImmediate)
5. **Repeat**: After each macrotask, check and execute all microtasks before the next macrotask

**Key Rules**:
- All microtasks must complete before any macrotask executes
- `process.nextTick()` has priority over promise microtasks in Node.js
- If microtasks keep adding more microtasks, macrotasks will be delayed (potential starvation)
- Each iteration of the event loop processes phases in order, with microtasks between phases

### Execution Priority Examples

**Example 1: Basic Priority**
```javascript
console.log('1: Synchronous');

setTimeout(() => console.log('2: Macrotask - setTimeout'), 0);

Promise.resolve().then(() => console.log('3: Microtask - Promise'));

process.nextTick(() => console.log('4: NextTick'));

console.log('5: Synchronous');

// Output:
// 1: Synchronous
// 5: Synchronous
// 4: NextTick
// 3: Microtask - Promise
// 2: Macrotask - setTimeout
```

**Example 2: Nested Callbacks**
```javascript
setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => console.log('Promise in Timeout 1'));
}, 0);

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  process.nextTick(() => console.log('NextTick in Promise 1'));
});

// Output:
// Promise 1
// NextTick in Promise 1
// Timeout 1
// Promise in Timeout 1
// Timeout 2
```

**Example 3: setImmediate vs setTimeout**
```javascript
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));

// Output order is not guaranteed in main module
// but setImmediate executes in check phase
// setTimeout executes in timers phase
```

**Example 4: Microtask Starvation**
```javascript
function addMicrotask() {
  Promise.resolve().then(() => {
    console.log('Microtask');
    addMicrotask(); // Keeps adding microtasks
  });
}

setTimeout(() => console.log('This may never execute!'), 0);
addMicrotask();

// The setTimeout callback may be delayed indefinitely
// because microtasks keep adding more microtasks
```

---

## Summary

Node.js architecture is a sophisticated system that combines:
- **V8 engine** for fast JavaScript execution
- **libuv** for cross-platform asynchronous I/O and event loop management
- **Thread pool** for handling blocking operations without freezing the main thread
- **Worker threads** for parallel JavaScript execution
- **Event loop queues** with priority-based task scheduling

This architecture enables Node.js to handle thousands of concurrent connections efficiently while maintaining a single-threaded JavaScript execution model, making it ideal for I/O-intensive applications like web servers, APIs, and real-time applications.