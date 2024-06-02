import express from 'express';
import { getTeams, addTeam } from '../controllers/teams.js';
const router = express.Router();

router.get('/teams', getTeams);
router.post('/teams', addTeam);

export default router;
