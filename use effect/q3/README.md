## Component Lifecycle & Cleanup Function in React

a) Component Lifecycle in React Functional Components

React functional components have three main lifecycle phases, all managed through the `useEffect` hook:

# 1. Mount Phase
```javascript
useEffect(() => {
  // Code runs once when component mounts
  console.log('Component mounted');
}, []) // Empty dependency array
```
- Runs **only once** after the component is first rendered
- Empty dependency array `[]` ensures it doesn't run again
- Similar to `componentDidMount` in class components
- **Use cases**: API calls, setting up subscriptions, initializing third-party libraries

# 2. Update Phase
```javascript
useEffect(() => {
  // Code runs when dependencies change
  console.log('Count updated:', count);
}, [count]) // Dependency array with variables
```
- Runs **when any dependency in the array changes**
- Re-executes every time the specified state/props update
- Similar to `componentDidUpdate` in class components
- **Use cases**: Responding to state/prop changes, syncing with external data, validating inputs

# 3. Unmount Phase (Cleanup)
```javascript
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  
  return () => {
    // Cleanup function runs before unmount
    clearInterval(timer);
    console.log('Component unmounted');
  };
}, [])
```
- The **return function** inside `useEffect` is the cleanup function
- Runs **before the component is removed** from the DOM
- Similar to `componentWillUnmount` in class components
- **Use cases**: Clearing timers, canceling subscriptions, removing event listeners

---

## b) What is a Cleanup Function? Why Is It Needed?

# What is a Cleanup Function?
A cleanup function is a function **returned from `useEffect`** that React calls:
- Before running the effect again (on re-render)
- When the component unmounts (is removed from the DOM)

```javascript
useEffect(() => {
  // Setup code
  const subscription = subscribeToData();
  
  return () => {
    // Cleanup code
    subscription.unsubscribe();
  };
}, [dependency]);
```

# Why Is It Needed?

# 1. **Prevent Memory Leaks**
Without cleanup, resources like timers, subscriptions, or event listeners continue running even after the component is removed:
```javascript
//  BAD: Memory leak
useEffect(() => {
  setInterval(() => console.log('Running...'), 1000);
}, []);

//  GOOD: Cleanup prevents leak
useEffect(() => {
  const timer = setInterval(() => console.log('Running...'), 1000);
  return () => clearInterval(timer);
}, []);
```

#### 2. **Remove Event Listeners**
Event listeners attached to `window` or `document` must be removed:
```javascript
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

#### 3. **Cancel Ongoing Operations**
API requests or async operations should be canceled if the component unmounts:
```javascript
useEffect(() => {
  let isCancelled = false;
  
  fetch('/api/data')
    .then(data => {
      if (!isCancelled) setData(data);
    });
  
  return () => {
    isCancelled = true; // Prevent setting state on unmounted component
  };
}, []);
```

## 4. **Avoid Side Effects from Stale Data**
Cleanup ensures that effects from previous renders don't interfere with new ones:
```javascript
useEffect(() => {
  const subscription = subscribeToUser(userId);
  
  return () => {
    subscription.unsubscribe(); // Unsubscribe from old user before subscribing to new one
  };
}, [userId]);
```

---

