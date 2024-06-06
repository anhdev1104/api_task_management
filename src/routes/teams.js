import express from 'express';
import { getTeams, addTeam, getTeam, updateTeam, deleteTeam } from '../controllers/teams.js';
const router = express.Router();

router.get('/teams', getTeams);
router.get('/teams/:id', getTeam);
router.post('/teams', addTeam);
router.put('/teams', updateTeam);
router.delete('/teams/:id', deleteTeam);

export default router;
