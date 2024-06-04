import express from 'express';
import { addAccount } from '../controllers/auth.js';
const router = express.Router();

router.post('/account', addAccount);

export default router;
