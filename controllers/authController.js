const { signupUser, getUserProfile } = require('../services/authService');

/**
 * Handle user signup
 */
async function signup(req, res) {
  try {
    const userData = req.body;
    const result = await signupUser(userData);
    res.status(201).json(result);
  } catch (error) {
    if (error.status) {
      res.status(error.status).json({ error: error.message });
    } else {
      console.error('Signup error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

/**
 * Handle get user profile
 */
async function getProfile(req, res) {
  try {
    const { name } = req.query;
    const profile = await getUserProfile(name);
    res.status(200).json(profile);
  } catch (error) {
    if (error.status) {
      res.status(error.status).json({ error: error.message });
    } else {
      console.error('Profile fetch error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = {
  signup,
  getProfile
};
