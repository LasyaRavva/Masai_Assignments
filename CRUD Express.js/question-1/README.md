# Student Management System API

A RESTful API for managing student records using Node.js, Express, and JSON file storage.

## Features

- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ Data persistence with JSON file
- ✅ Input validation
- ✅ Meaningful error messages
- ✅ ESM modules support
- ✅ RESTful API design

## Project Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "CRUD Express.js/question-1"
```

2. Install dependencies:
```bash
npm install
```

### Running the Server

**Development mode with auto-reload:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### 1. GET /students
Fetch all students from the database

**Request:**
```http
GET http://localhost:3000/students
```

**Response:**
```json
{
  "success": true,
  "message": "All students fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Rahul",
      "course": "Computer Science",
      "year": 2
    }
  ],
  "count": 3
}
```

### 2. GET /students/:id
Fetch a single student by ID

**Request:**
```http
GET http://localhost:3000/students/1
```

**Response:**
```json
{
  "success": true,
  "message": "Student fetched successfully",
  "data": {
    "id": 1,
    "name": "Rahul",
    "course": "Computer Science",
    "year": 2
  }
}
```

### 3. POST /students
Add a new student

**Request:**
```http
POST http://localhost:3000/students
Content-Type: application/json

{
  "name": "John Doe",
  "course": "Data Science",
  "year": 1
}
```

**Response:**
```json
{
  "success": true,
  "message": "Student added successfully",
  "data": {
    "id": 4,
    "name": "John Doe",
    "course": "Data Science",
    "year": 1
  }
}
```

### 4. PUT /students/:id
Update an existing student

**Request:**
```http
PUT http://localhost:3000/students/1
Content-Type: application/json

{
  "name": "Rahul Kumar",
  "course": "Data Science",
  "year": 3
}
```

**Response:**
```json
{
  "success": true,
  "message": "Student updated successfully",
  "data": {
    "id": 1,
    "name": "Rahul Kumar",
    "course": "Data Science",
    "year": 3
  }
}
```

### 5. DELETE /students/:id
Delete a student by ID

**Request:**
```http
DELETE http://localhost:3000/students/1
```

**Response:**
```json
{
  "success": true,
  "message": "Student deleted successfully",
  "data": {
    "id": 1,
    "name": "Rahul",
    "course": "Computer Science",
    "year": 2
  }
}
```

## Validation Rules

- **Name**: Must be a non-empty string
- **Course**: Must be a non-empty string
- **Year**: Must be an integer between 1 and 4

## Error Handling

### 400 Bad Request
```json
{
  "success": false,
  "message": "Missing required fields: name, course, year"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Student with ID 999 not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Error adding student",
  "error": "error details"
}
```

## Data Persistence

Student data is stored in `db.json` file using Node.js `fs` module. Data persists across server restarts.

## Testing with Postman

1. Import the API collection or manually create requests
2. Test all CRUD operations in the following order:
   - GET /students - Fetch all
   - POST /students - Create new
   - GET /students/:id - Fetch single
   - PUT /students/:id - Update
   - DELETE /students/:id - Delete
   - GET /students - Verify deletion

## File Structure

```
question-1/
├── server.js          # Main application file
├── db.json            # Student data storage
├── package.json       # Project configuration
└── README.md          # This file
```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Module System**: ESM (ECMAScript Modules)
- **Database**: JSON file (db.json)
- **File System**: Node.js fs module

## Author

Created as part of MASAI coding assignments

## License

ISC
