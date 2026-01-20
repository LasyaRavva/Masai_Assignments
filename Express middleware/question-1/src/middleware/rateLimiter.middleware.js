const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 15;

const requests = new Map(); // ip -> timestamps array

const rateLimiterMiddleware = (req, res, next) => {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const key = req.ip || 'global';

  const timestamps = requests.get(key) || [];
  const recent = timestamps.filter((ts) => ts > windowStart);

  if (recent.length >= MAX_REQUESTS) {
    return res.status(429).json({
      error: 'Too many requests, please try again later'
    });
  }

  recent.push(now);
  requests.set(key, recent);
  next();
};

export default rateLimiterMiddleware;
