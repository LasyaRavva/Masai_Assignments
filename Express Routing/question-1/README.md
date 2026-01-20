# Express Routing CRUD Assignment

This project demonstrates Express.js routing, Express Router, and CRUD operations with a JSON database.

## Project Structure

```
src/
 ├── index.js
 ├── routes/
 │    ├── users.routes.js
 │    └── todos.routes.js
├── db.json
├── package.json
└── README.md
```

## Setup & Installation

1. Navigate to the project directory:
```bash
cd Express\ Routing/question-1
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:3000`

## API Endpoints

### User Routes (`/users`)

- **POST /users/add** - Create a new user
  - Body: `{ "name": "string", "email": "string", "phone": "string" }`
  - Returns: Created user with userId

- **GET /users** - Get all users
  - Returns: Array of all users

- **GET /users/:userId** - Get a single user
  - Params: `userId` (number)
  - Returns: User object

- **PUT /users/update/:userId** - Update a user
  - Params: `userId` (number)
  - Body: `{ "name": "string", "email": "string", "phone": "string" }` (at least one field)
  - Returns: Updated user object

- **DELETE /users/delete/:userId** - Delete a user
  - Params: `userId` (number)
  - Returns: Deleted user object

### Todo Routes (`/todos`)

- **POST /todos/add** - Create a new todo
  - Body: `{ "title": "string", "description": "string" (optional), "completed": boolean (optional), "userId": number (optional) }`
  - Returns: Created todo with todoId

- **GET /todos** - Get all todos
  - Returns: Array of all todos

- **GET /todos/:todoId** - Get a single todo
  - Params: `todoId` (number)
  - Returns: Todo object

- **PUT /todos/update/:todoId** - Update a todo
  - Params: `todoId` (number)
  - Body: `{ "title": "string", "description": "string", "completed": boolean, "userId": number }` (at least one field)
  - Returns: Updated todo object

- **DELETE /todos/delete/:todoId** - Delete a todo
  - Params: `todoId` (number)
  - Returns: Deleted todo object

## Features

✅ Express Router for modular routing
✅ CRUD operations for Users and Todos
✅ JSON database (db.json) with real-time updates
✅ Input validation
✅ Proper HTTP status codes
✅ Error handling
✅ Clean, modular code structure

## Example Usage

### Create a User
```bash
curl -X POST http://localhost:3000/users/add \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","phone":"1234567890"}'
```

### Get All Users
```bash
curl http://localhost:3000/users
```

### Update a User
```bash
curl -X PUT http://localhost:3000/users/update/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe"}'
```

### Create a Todo
```bash
curl -X POST http://localhost:3000/todos/add \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Express","description":"Study routing","userId":1}'
```

### Delete a Todo
```bash
curl -X DELETE http://localhost:3000/todos/delete/1
```

## Database

All data is stored in `db.json` with the following structure:

```json
{
  "users": [
    {
      "userId": 1,
      "name": "Name",
      "email": "email@example.com",
      "phone": "phoneNumber"
    }
  ],
  "todos": [
    {
      "todoId": 1,
      "title": "Title",
      "description": "Description",
      "completed": false,
      "userId": 1
    }
  ]
}
```

## License

ISC
