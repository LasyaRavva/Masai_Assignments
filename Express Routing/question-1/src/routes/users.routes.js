import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
    return { users: [], todos: [] };
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
};

const generateUserId = (users) => {
  if (users.length === 0) return 1;
  return Math.max(...users.map(u => u.userId)) + 1;
};

router.post('/add', (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, and phone are required'
      });
    }

    const db = readDB();
    const newUser = {
      userId: generateUserId(db.users),
      name,
      email,
      phone
    };

    db.users.push(newUser);
    writeDB(db);

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

router.get('/', (req, res) => {
  try {
    const db = readDB();
    res.status(200).json({
      status: 'success',
      data: db.users
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

router.get('/:userId', (req, res) => {
  try {
    const { userId } = req.params;

    if (isNaN(userId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid userId'
      });
    }

    const db = readDB();
    const user = db.users.find(u => u.userId === parseInt(userId));

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// PUT /users/update/:userId - Update a user
router.put('/update/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, phone } = req.body;

    // Validate userId is a number
    if (isNaN(userId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid userId'
      });
    }

    // Validation - at least one field must be provided
    if (!name && !email && !phone) {
      return res.status(400).json({
        status: 'error',
        message: 'At least one field (name, email, or phone) must be provided'
      });
    }

    const db = readDB();
    const userIndex = db.users.findIndex(u => u.userId === parseInt(userId));

    if (userIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    // Update fields
    if (name) db.users[userIndex].name = name;
    if (email) db.users[userIndex].email = email;
    if (phone) db.users[userIndex].phone = phone;

    writeDB(db);

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: db.users[userIndex]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

// DELETE /users/delete/:userId - Delete a user
router.delete('/delete/:userId', (req, res) => {
  try {
    const { userId } = req.params;

    // Validate userId is a number
    if (isNaN(userId)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid userId'
      });
    }

    const db = readDB();
    const userIndex = db.users.findIndex(u => u.userId === parseInt(userId));

    if (userIndex === -1) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }

    const deletedUser = db.users.splice(userIndex, 1);
    writeDB(db);

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
      data: deletedUser[0]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
});

export default router;
