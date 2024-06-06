import express from 'express';
import {
  addAccount,
  getAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
  loginAccount,
} from '../controllers/auth.js';
import middlewareToken from '../middlewares/middlewareToken.js';
const router = express.Router();

router.get('/account', middlewareToken.verifyToken, getAccounts);
router.get('/account/:id', getAccount);
router.post('/account', addAccount);
router.put('/account/:id', updateAccount);
router.delete('/account/:id', middlewareToken.verifyToken, deleteAccount);

router.post('/login', loginAccount);
export default router;
