import bcrypt from 'bcrypt';
import Account from '../models/Account.js';
import Teams from '../models/Teams.js';
import { generateAccessToken, generateRefreshToken } from '../services/jwtService.js';

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id).populate('team');
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addAccount = async (req, res) => {
  try {
    const existingAccount = await Account.findOne({ email: req.body.email });
    if (existingAccount) return res.status(400).json({ message: 'Email đã tồn tại !' });

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAccount = new Account({ ...req.body, password: hashedPassword });
    const saveAccount = await newAccount.save();

    if (req.body.team) {
      const team = await Teams.findById(req.body.team);
      if (team) {
        await team.updateOne({ $push: { members: saveAccount._id } });
      } else {
        return res.status(404).json({ error: 'Team not found' });
      }
    }
    res.status(200).json(saveAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    await account.updateOne({ $set: req.body });
    if (req.body.team) {
      const team = await Teams.findById(req.body.team);
      if (team) {
        await team.updateOne({ $push: { members: account._id } });
      } else {
        return res.status(404).json({ error: 'Team not found' });
      }
    }
    res.status(200).json('Cập nhập thành công !');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    await Teams.updateMany({ members: req.params.id }, { $pull: { members: req.params.id } });
    await Account.findByIdAndDelete(req.params.id);
    res.status(200).json('Xoá thành công !');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginAccount = async (req, res) => {
  try {
    // Authentication
    const account = await Account.findOne({ email: req.body.email });
    if (!account) return res.status(404).json({ message: 'Email không tìm thấy !' });

    const validPassword = await bcrypt.compare(req.body.password, account.password);
    if (!validPassword) return res.status(404).json({ message: 'Sai mật khẩu !' });

    // Authorization
    if (account && validPassword) {
      const accessToken = generateAccessToken(account);
      const refreshToken = generateRefreshToken(account);
      console.log('🚀 ~ loginAccount ~ refreshToken:', refreshToken);
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true, // Chỉ có thể truy cập thông qua HTTP,
        secure: false,
        sameSite: 'strict',
      });
      return res.status(200).json({ accessToken, refreshToken });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
