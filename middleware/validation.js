/**
 * Validate signup request data
 */
function validateSignup(req, res, next) {
  const { name, email, age, location, password } = req.body;

  // Check if all fields are provided
  if (!name || !email || !age || !location || !password) {
    return res.status(400).json({ 
      error: 'All fields are required: name, email, age, location, password' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Validate age
  if (typeof age !== 'number' || age < 1 || age > 150) {
    return res.status(400).json({ error: 'Age must be a valid number between 1 and 150' });
  }

  // Validate password length
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  next();
}

/**
 * Validate profile request query parameter
 */
function validateProfileQuery(req, res, next) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  next();
}

module.exports = {
  validateSignup,
  validateProfileQuery
};
