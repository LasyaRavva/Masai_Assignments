const bcrypt = require('bcrypt');
const supabase = require('../config/supabase');

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} Success message
 */
async function signupUser(userData) {
  const { name, email, age, location, password } = userData;

  try {
    // Check if user with this email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('auth_users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      throw { status: 409, message: 'Email already exists' };
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert user into database
    const { data, error } = await supabase
      .from('auth_users')
      .insert([
        {
          name,
          email,
          age,
          location,
          password: hashedPassword
        }
      ])
      .select();

    if (error) {
      // Handle unique constraint violation
      if (error.code === '23505') {
        throw { status: 409, message: 'Email already exists' };
      }
      throw error;
    }

    return { message: 'User registered successfully' };
  } catch (error) {
    throw error;
  }
}

/**
 * Get user profile by name
 * @param {string} name - User's name
 * @returns {Promise<Object>} User profile without password
 */
async function getUserProfile(name) {
  try {
    const { data, error } = await supabase
      .from('auth_users')
      .select('id, name, email, age, location')
      .eq('name', name)
      .single();

    if (error || !data) {
      throw { status: 404, message: 'User not found' };
    }

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signupUser,
  getUserProfile
};
