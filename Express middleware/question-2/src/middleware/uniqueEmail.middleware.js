import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '..', '..', 'db.json');

const readDB = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [] };
  }
};

const uniqueEmailMiddleware = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const db = readDB();
  const emailExists = db.users.some((user) => user.email === req.body.email);

  if (emailExists) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  next();
};

export default uniqueEmailMiddleware;
