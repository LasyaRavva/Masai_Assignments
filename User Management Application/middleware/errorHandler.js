const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Supabase errors
  if (err.status) {
    return res.status(err.status).json({
      error: err.message || 'Database error',
      details: err.details || null,
    });
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: err.message,
    });
  }

  // Not found errors
  if (err.status === 404) {
    return res.status(404).json({
      error: 'Resource not found',
    });
  }

  // Duplicate key error
  if (err.code === '23505') {
    return res.status(409).json({
      error: 'Email already exists',
    });
  }

  // Default server error
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
};

module.exports = errorHandler;
