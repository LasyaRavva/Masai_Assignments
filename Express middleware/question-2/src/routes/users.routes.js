import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import upload from '../middleware/upload.middleware.js';
import uniqueEmailMiddleware from '../middleware/uniqueEmail.middleware.js';
import cloudinary from '../config/cloudinary.config.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', '..', 'db.json');

const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing database:', error);
    return false;
  }
};

// POST /users/signup - Register a new user with profile picture
router.post(
  '/signup',
  upload.single('profile'),
  uniqueEmailMiddleware,
  async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Validation
      if (!name || !email || !password) {
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(400).json({
          error: 'Name, email, and password are required'
        });
      }

      if (!req.file) {
        return res.status(400).json({
          error: 'Profile image is required'
        });
      }

      // Upload to Cloudinary
      let cloudinaryUrl;
      try {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'masai-signup-profiles',
          resource_type: 'auto'
        });
        cloudinaryUrl = result.secure_url;

        // Delete local file after upload
        fs.unlinkSync(req.file.path);
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        if (req.file) {
          fs.unlinkSync(req.file.path);
        }
        return res.status(500).json({
          error: 'Failed to upload image to Cloudinary'
        });
      }

      // Create user object
      const newUser = {
        id: uuidv4(),
        name,
        email,
        password,
        profilePic: cloudinaryUrl,
        createdAt: new Date().toISOString()
      };

      // Save to db.json
      const db = readDB();
      db.users.push(newUser);
      writeDB(db);

      // Return success response (without password)
      const { password: _, ...userWithoutPassword } = newUser;
      return res.status(201).json({
        message: 'User registered successfully',
        user: userWithoutPassword
      });
    } catch (error) {
      console.error('Signup error:', error);
      if (req.file) {
        try {
          fs.unlinkSync(req.file.path);
        } catch (e) {
          // ignore
        }
      }
      return res.status(500).json({
        error: 'Internal server error during signup'
      });
    }
  }
);

export default router;
