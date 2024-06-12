import express from 'express';
import { addProject, deleteProject, getProject, getProjectId, updateProject } from '../controllers/project.js';
const router = express.Router();

router.get('/project', getProject);
router.get('/project/:id', getProjectId);
router.post('/project', addProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);

export default router;
