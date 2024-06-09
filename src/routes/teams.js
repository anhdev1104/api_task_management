import express from 'express';
import { getTeams, addTeam, getTeam, updateTeam, deleteTeam } from '../controllers/teams.js';
import middlewareToken from '../middlewares/middlewareToken.js';
const router = express.Router();

router.get('/teams', middlewareToken.verifyToken, getTeams);
router.get('/teams/:id', getTeam);
router.post('/teams', addTeam);
router.put('/teams', updateTeam);
router.delete('/teams/:id', deleteTeam);

export default router;
