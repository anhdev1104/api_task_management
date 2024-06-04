import Account from '../models/Account.js';

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(500).json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addAccount = async (req, res) => {
  try {
    const newAccount = new Account(req.body);
    const saveAccount = await newAccount.save();
    res.status(200).json(saveAccount);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
