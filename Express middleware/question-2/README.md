# Express + Multer – User Signup with Profile Upload

Express application with Multer file uploads and Cloudinary image storage for user signup.

## Features
- Multer file upload with image validation
- Cloudinary image storage integration
- Unique email enforcement via custom middleware
- Real-time db.json persistence
- Clean modular structure

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Configure Cloudinary:**
   - Copy `.env.example` to `.env`
   - Add your Cloudinary credentials:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

3. **Run the server:**
```bash
npm start        # Production
npm run dev      # Development with watch
```

## API Endpoints

### POST /users/signup
Sign up a new user with profile picture.

**Request:** `multipart/form-data`
```
name (string, required)
email (string, required)
password (string, required)
profile (image file, required - max 5MB)
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "User Name",
    "email": "user@example.com",
    "profilePic": "https://cloudinary.com/...",
    "createdAt": "2026-01-20T..."
  }
}
```

**Error Responses:**
- **409 Conflict:** Email already exists
- **400 Bad Request:** Missing fields or invalid file
- **500 Internal Server Error:** Server error

## Project Structure
```
src/
  index.js
  routes/
    users.routes.js
  middleware/
    upload.middleware.js
    uniqueEmail.middleware.js
  config/
    cloudinary.config.js

db.json
package.json
.env.example
```

## Multer Configuration
- Accepts only image files (jpeg, png, gif, webp)
- File size limit: 5MB
- Temporary storage in `/uploads` directory

## Cloudinary Integration
- Automatically uploads images after Multer validation
- Stores secure URLs in db.json
- Cleans up local files after upload
