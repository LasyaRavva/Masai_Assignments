# Todo Application - MVC Architecture

A Todo application built with Express.js following MVC (Model-View-Controller) architecture and standard coding practices.

## Features

- ✅ Full CRUD operations for todos
- 🏗️ Clean MVC architecture
- 📦 ES Module (ESM) syntax
- ✨ Proper HTTP status codes
- 🛡️ Comprehensive error handling with try-catch
- 📁 Standard Express project structure
- 📝 File-based JSON storage

## Project Structure

```
question-1/
├── src/
│   ├── controllers/
│   │   └── todo.controller.js    # Business logic for todos
│   ├── models/
│   │   └── todo.model.js         # Data layer & persistence
│   ├── routes/
│   │   └── todo.routes.js        # Route definitions
│   ├── middleware/
│   │   └── error.middleware.js   # Error handling middleware
│   ├── app.js                    # Express app configuration
│   └── server.js                 # Server entry point
├── data/
│   └── todos.json                # JSON database
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd standard-project/question-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

The server will start on `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:3000/api/todos`

### 1. Get All Todos
**GET** `/api/todos`

**Response (200):**
```json
{
  "data": [
    {
      "id": "uuid-string",
      "title": "Complete assignment",
      "description": "Finish the MVC todo app",
      "completed": false,
      "createdAt": "2026-01-21T10:00:00.000Z",
      "updatedAt": "2026-01-21T10:00:00.000Z"
    }
  ]
}
```

### 2. Get Todo by ID
**GET** `/api/todos/:id`

**Response (200):**
```json
{
  "data": {
    "id": "uuid-string",
    "title": "Complete assignment",
    "description": "Finish the MVC todo app",
    "completed": false,
    "createdAt": "2026-01-21T10:00:00.000Z",
    "updatedAt": "2026-01-21T10:00:00.000Z"
  }
}
```

**Error (404):**
```json
{
  "error": "Todo not found"
}
```

### 3. Create Todo
**POST** `/api/todos`

**Request Body:**
```json
{
  "title": "Complete assignment",
  "description": "Finish the MVC todo app" // optional
}
```

**Response (201):**
```json
{
  "data": {
    "id": "generated-uuid",
    "title": "Complete assignment",
    "description": "Finish the MVC todo app",
    "completed": false,
    "createdAt": "2026-01-21T10:00:00.000Z",
    "updatedAt": "2026-01-21T10:00:00.000Z"
  }
}
```

**Error (400):**
```json
{
  "error": "Title is required and must be a non-empty string"
}
```

### 4. Update Todo
**PATCH/PUT** `/api/todos/:id`

**Request Body (all fields optional):**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

**Response (200):**
```json
{
  "data": {
    "id": "uuid-string",
    "title": "Updated title",
    "description": "Updated description",
    "completed": true,
    "createdAt": "2026-01-21T10:00:00.000Z",
    "updatedAt": "2026-01-21T11:00:00.000Z"
  }
}
```

**Errors:**
- **400:** Invalid field values
- **404:** Todo not found

### 5. Delete Todo
**DELETE** `/api/todos/:id`

**Response (200):**
```json
{
  "message": "Todo deleted successfully"
}
```

**Error (404):**
```json
{
  "error": "Todo not found"
}
```

## HTTP Status Codes

| Code | Usage |
|------|-------|
| 200  | Successful GET, PATCH, PUT, DELETE |
| 201  | Successful resource creation (POST) |
| 400  | Bad request (validation errors) |
| 404  | Resource not found |
| 500  | Internal server error |

## Architecture

### MVC Pattern

1. **Model** (`todo.model.js`)
   - Data structure and persistence logic
   - File operations (read/write JSON)
   - CRUD operations at data layer

2. **Controller** (`todo.controller.js`)
   - Request/response handling
   - Input validation
   - Business logic
   - Error handling

3. **Routes** (`todo.routes.js`)
   - HTTP method and path mappings
   - Connects URLs to controller functions

### Error Handling

- Centralized error middleware
- Consistent error response format
- Try-catch blocks in all async operations
- Proper HTTP status codes

### ES Modules (ESM)

- Uses `import`/`export` syntax
- `"type": "module"` in package.json
- File extensions required in imports

## Dependencies

```json
{
  "express": "^4.19.2",      // Web framework
  "morgan": "^1.10.0",       // HTTP request logger
  "uuid": "^9.0.1"           // Unique ID generation
}
```

### Dev Dependencies

```json
{
  "nodemon": "^3.0.3"        // Auto-restart on file changes
}
```

## Example Usage with cURL

### Create a todo:
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Express", "description": "Master MVC pattern"}'
```

### Get all todos:
```bash
curl http://localhost:3000/api/todos
```

### Update a todo:
```bash
curl -X PATCH http://localhost:3000/api/todos/<todo-id> \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### Delete a todo:
```bash
curl -X DELETE http://localhost:3000/api/todos/<todo-id>
```

## Testing

You can test the API using:
- **cURL** (command line)
- **Postman** (GUI)
- **Thunder Client** (VS Code extension)
- **REST Client** (VS Code extension)

## License

MIT
