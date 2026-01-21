export const notFoundHandler = (_req, res) => {
  return res.status(404).json({ error: 'Route not found' });
};

export const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  // Log full error for debugging
  console.error('[Error]', err);

  return res.status(statusCode).json({ error: message });
};
