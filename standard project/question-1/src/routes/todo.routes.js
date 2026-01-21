import { Router } from 'express';
import {
  createTodoHandler,
  deleteTodoHandler,
  getTodo,
  listTodos,
  updateTodoHandler
} from '../controllers/todo.controller.js';

const router = Router();

router.get('/', listTodos);
router.get('/:id', getTodo);
router.post('/', createTodoHandler);
router.patch('/:id', updateTodoHandler);
router.delete('/:id', deleteTodoHandler);

export default router;
