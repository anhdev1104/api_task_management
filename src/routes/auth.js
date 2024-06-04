import express from 'express';
import { addAccount, getAccounts } from '../controllers/auth.js';
const router = express.Router();

router.get('/account', getAccounts);
router.post('/account', addAccount);

export default router;
