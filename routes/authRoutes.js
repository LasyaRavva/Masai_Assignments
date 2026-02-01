const express = require('express');
const router = express.Router();
const { signup, getProfile } = require('../controllers/authController');
const { validateSignup, validateProfileQuery } = require('../middleware/validation');

// POST /signup - Register a new user
router.post('/signup', validateSignup, signup);

// GET /myprofile?name=<name> - Get user profile
router.get('/myprofile', validateProfileQuery, getProfile);

module.exports = router;
