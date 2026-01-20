const validateTodoMiddleware = (req, res, next) => {
  const keys = Object.keys(req.body || {});

  // Only "title" is allowed
  if (keys.length !== 1 || keys[0] !== 'title') {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed"
    });
  }

  const { title } = req.body;

  if (typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed"
    });
  }

  // Normalise title
  req.body.title = title.trim();
  next();
};

export default validateTodoMiddleware;
