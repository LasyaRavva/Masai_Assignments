# Mini User Authentication System

A simple User Authentication API built with Node.js, Express, and Supabase (PostgreSQL).

## 🚀 Features

- User signup with secure password hashing (bcrypt)
- User profile retrieval without exposing password
- Email uniqueness validation
- Input validation
- Proper error handling

## 📋 Prerequisites

- Node.js installed
- Supabase account
- PostgreSQL database in Supabase

## 🗄️ Database Setup

Create a table named `auth_users` in Supabase with the following SQL:

```sql
CREATE TABLE auth_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age INTEGER NOT NULL,
  location TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## ⚙️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

4. Start the server:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

## 📌 API Endpoints

### 1. Signup
**POST** `/signup`

Request Body:
```json
{
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "age": 22,
  "location": "Bangalore",
  "password": "123456"
}
```

Response:
```json
{
  "message": "User registered successfully"
}
```

### 2. Get User Profile
**GET** `/myprofile?name=<name>`

Example: `/myprofile?name=Ravi`

Response:
```json
{
  "id": "uuid",
  "name": "Ravi",
  "email": "ravi@gmail.com",
  "age": 22,
  "location": "Bangalore"
}
```

## 🛡️ Security Features

- Passwords are hashed using bcrypt before storage
- Passwords are never returned in API responses
- Email uniqueness is enforced
- Input validation for all required fields

## 📝 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Supabase** - PostgreSQL database
- **bcrypt** - Password hashing

## 🎯 Error Handling

- Returns 400 for missing fields
- Returns 409 for duplicate email
- Returns 404 for user not found
- Returns 500 for server errors
