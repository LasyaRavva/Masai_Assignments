# Express Middleware Assignment – Todo CRUD

Express app demonstrating app-level logging, route-level rate limiting, and request validation middleware for Todo CRUD.

## Structure
```
src/
  index.js
  routes/
    todos.routes.js
  middleware/
    logger.middleware.js
    rateLimiter.middleware.js
    validateTodo.middleware.js

db.json
package.json
```

## Scripts
```bash
npm install
npm start   # run server on port 3000
npm run dev # watch mode
```

## Endpoints
- POST /todos/add (validation middleware)
- GET /todos (rate limited: 15 req/min)
- GET /todos/:todoId
- PUT /todos/update/:todoId
- DELETE /todos/delete/:todoId
```
