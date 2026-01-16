import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Database file path
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read students from db.json
const readStudents = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data).students;
  } catch (error) {
    console.error('Error reading database:', error);
    return [];
  }
};

// Helper function to write students to db.json
const writeStudents = (students) => {
  try {
    fs.writeFileSync(dbPath, JSON.stringify({ students }, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing to database:', error);
    return false;
  }
};

// Helper function to generate new ID
const generateId = (students) => {
  if (students.length === 0) return 1;
  return Math.max(...students.map(s => s.id)) + 1;
};

// ==================== CRUD ENDPOINTS ====================

// GET /students - Fetch all students
app.get('/students', (req, res) => {
  try {
    const students = readStudents();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully',
      data: students,
      count: students.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching students',
      error: error.message
    });
  }
});

// GET /students/:id - Fetch a single student
app.get('/students/:id', (req, res) => {
  try {
    const students = readStudents();
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${req.params.id} not found`
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching student',
      error: error.message
    });
  }
});

// POST /students - Add a new student
app.post('/students', (req, res) => {
  try {
    const { name, course, year } = req.body;

    // Validation
    if (!name || !course || year === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, course, year'
      });
    }

    if (typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Name must be a non-empty string'
      });
    }

    if (typeof course !== 'string' || course.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Course must be a non-empty string'
      });
    }

    if (!Number.isInteger(year) || year < 1 || year > 4) {
      return res.status(400).json({
        success: false,
        message: 'Year must be an integer between 1 and 4'
      });
    }

    const students = readStudents();
    const newStudent = {
      id: generateId(students),
      name: name.trim(),
      course: course.trim(),
      year: year
    };

    students.push(newStudent);

    if (writeStudents(students)) {
      res.status(201).json({
        success: true,
        message: 'Student added successfully',
        data: newStudent
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Error saving student to database'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding student',
      error: error.message
    });
  }
});

// PUT /students/:id - Update a student
app.put('/students/:id', (req, res) => {
  try {
    const studentId = parseInt(req.params.id);
    const { name, course, year } = req.body;

    // Validation
    if (!name && !course && year === undefined) {
      return res.status(400).json({
        success: false,
        message: 'At least one field (name, course, or year) is required to update'
      });
    }

    if (name !== undefined && (typeof name !== 'string' || name.trim() === '')) {
      return res.status(400).json({
        success: false,
        message: 'Name must be a non-empty string'
      });
    }

    if (course !== undefined && (typeof course !== 'string' || course.trim() === '')) {
      return res.status(400).json({
        success: false,
        message: 'Course must be a non-empty string'
      });
    }

    if (year !== undefined && (!Number.isInteger(year) || year < 1 || year > 4)) {
      return res.status(400).json({
        success: false,
        message: 'Year must be an integer between 1 and 4'
      });
    }

    const students = readStudents();
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${studentId} not found`
      });
    }

    // Update only provided fields
    if (name !== undefined) students[studentIndex].name = name.trim();
    if (course !== undefined) students[studentIndex].course = course.trim();
    if (year !== undefined) students[studentIndex].year = year;

    if (writeStudents(students)) {
      res.status(200).json({
        success: true,
        message: 'Student updated successfully',
        data: students[studentIndex]
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Error saving updated student to database'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating student',
      error: error.message
    });
  }
});

// DELETE /students/:id - Delete a student
app.delete('/students/:id', (req, res) => {
  try {
    const studentId = parseInt(req.params.id);
    const students = readStudents();
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex === -1) {
      return res.status(404).json({
        success: false,
        message: `Student with ID ${studentId} not found`
      });
    }

    const deletedStudent = students.splice(studentIndex, 1)[0];

    if (writeStudents(students)) {
      res.status(200).json({
        success: true,
        message: 'Student deleted successfully',
        data: deletedStudent
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Error deleting student from database'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting student',
      error: error.message
    });
  }
});

// ==================== ROOT ENDPOINT ====================

// GET / - Welcome message
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Student Management System API',
    endpoints: {
      'GET /students': 'Fetch all students',
      'GET /students/:id': 'Fetch a single student',
      'POST /students': 'Add a new student',
      'PUT /students/:id': 'Update a student',
      'DELETE /students/:id': 'Delete a student'
    }
  });
});

// ==================== ERROR HANDLING ====================

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📚 Student Management System API is ready`);
});

export default app;
