# User Management Application

A RESTful backend service built with Node.js, Express.js, and Supabase for performing complete CRUD operations on user data with proper validation and error handling.

## Features

- ✅ **User CRUD Operations**: Create, Read, Update, and Delete users
- ✅ **Data Validation**: Comprehensive input validation for all user fields
- ✅ **Password Hashing**: Secure password storage using bcryptjs
- ✅ **Error Handling**: Meaningful HTTP status codes and error messages
- ✅ **Supabase Integration**: PostgreSQL database via Supabase
- ✅ **Clean Architecture**: Well-organized project structure with separation of concerns

## Project Structure

```
user-management-app/
├── config/
│   └── supabaseClient.js       # Supabase client initialization
├── controllers/
│   └── userController.js       # Request handlers for user operations
├── middleware/
│   ├── validation.js           # Input validation functions
│   └── errorHandler.js         # Global error handling middleware
├── routes/
│   └── userRoutes.js           # API route definitions
├── services/
│   └── userService.js          # Business logic for user operations
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies
├── README.md                   # This file
└── server.js                   # Express server entry point
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account with a project
- Postman or Thunder Client for API testing

## Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials:
     ```
     SUPABASE_URL=your_supabase_project_url
     SUPABASE_ANON_KEY=your_supabase_anon_key
     PORT=3000
     NODE_ENV=development
     ```

4. **Create the users table in Supabase**

   Run this SQL in Supabase SQL Editor:
   ```sql
   CREATE TABLE users (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL,
     age INTEGER CHECK (age >= 18),
     role VARCHAR(50) DEFAULT 'user',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   CREATE INDEX idx_users_email ON users(email);
   ```

5. **Start the server**
   - **Development** (with auto-reload):
     ```bash
     npm run dev
     ```
   - **Production**:
     ```bash
     npm start
     ```

   The server will run on `http://localhost:3000`

## API Endpoints

### 1. Create User
**POST** `/api/users`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePass123",
  "age": 25,
  "role": "user"
}
```

Response (201 Created):
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "role": "user",
    "created_at": "2024-01-26T10:30:00Z"
  }
}
```

### 2. Get All Users
**GET** `/api/users`

Response (200 OK):
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "count": 2,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 25,
      "role": "user",
      "created_at": "2024-01-26T10:30:00Z"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "age": 28,
      "role": "admin",
      "created_at": "2024-01-26T11:15:00Z"
    }
  ]
}
```

### 3. Get User by ID
**GET** `/api/users/:id`

Response (200 OK):
```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25,
    "role": "user",
    "created_at": "2024-01-26T10:30:00Z"
  }
}
```

Error Response (404 Not Found):
```json
{
  "error": "User not found"
}
```

### 4. Update User
**PUT** `/api/users/:id`

Request body (only include fields to update):
```json
{
  "name": "John Smith",
  "age": 26
}
```

Response (200 OK):
```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Smith",
    "email": "john@example.com",
    "age": 26,
    "role": "user",
    "created_at": "2024-01-26T10:30:00Z"
  }
}
```

### 5. Delete User
**DELETE** `/api/users/:id`

Response (200 OK):
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

Error Response (404 Not Found):
```json
{
  "error": "User not found"
}
```

## Validation Rules

### Name
- Required
- Must not be empty
- Must be a string

### Email
- Required
- Must be a valid email format
- Must be unique in the database

### Password
- Required
- Minimum 8 characters
- Will be hashed before storing in the database

### Age
- Optional
- If provided, must be a number
- Must be 18 or older
- Enforced by both application and database constraints

### Role
- Optional (defaults to "user")
- Allowed values: "user", "admin", "moderator"

## Error Handling

The application returns meaningful error messages with appropriate HTTP status codes:

- **400 Bad Request**: Validation errors (invalid input)
- **404 Not Found**: User or resource not found
- **409 Conflict**: Duplicate email address
- **500 Internal Server Error**: Server-side errors

Example error response:
```json
{
  "error": "Email must be a valid email format"
}
```

## Testing with Postman

1. **Import requests**: You can create a new Postman collection with the endpoints listed above
2. **Set base URL**: `http://localhost:3000`
3. **Test each endpoint**:
   - POST to create users
   - GET to retrieve users
   - PUT to update users
   - DELETE to remove users

## Security Considerations

- **Password Hashing**: Passwords are hashed using bcryptjs with 10 rounds of salting
- **Input Validation**: All inputs are validated on the server side
- **Database Constraints**: Primary key, unique constraints, and check constraints enforce data integrity
- **Environment Variables**: Sensitive credentials are stored in `.env` file
- **UUID Primary Keys**: Using UUIDs instead of sequential integers for better security

## Technical Stack

- **Backend Framework**: Express.js 4.18.2
- **Database**: Supabase (PostgreSQL)
- **Client Library**: @supabase/supabase-js 2.38.4
- **Password Hashing**: bcryptjs 2.4.3
- **Input Validation**: validator 13.11.0
- **Environment Management**: dotenv 16.3.1
- **Development**: nodemon 3.0.2

## Future Enhancements

- Add authentication and JWT tokens
- Implement pagination for GET all users
- Add filtering and search capabilities
- Add rate limiting for API endpoints
- Implement logging system
- Add unit and integration tests
- Add database migrations
- Add email verification
- Implement password reset functionality

## License

MIT License

## Author

Your Name / Organization
