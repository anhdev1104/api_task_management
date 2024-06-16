import express from 'express';
import { addTasks, deleteTasks, getTaskId, getTasks, updateTasks } from '../controllers/tasks.js';
const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskId);
router.post('/tasks', addTasks);
router.put('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;
