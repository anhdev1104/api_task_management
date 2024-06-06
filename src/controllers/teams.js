import Account from '../models/Account.js';
import Teams from '../models/Teams.js';

export const getTeams = async (req, res) => {
  try {
    const teams = await Teams.find().populate('members');
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const team = await Teams.findById(req.params.id).populate('members');
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTeam = async (req, res) => {
  try {
    const newTeam = new Teams(req.body);
    const saveTeam = await newTeam.save();
    res.status(200).json(saveTeam);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTeam = async (req, res) => {
  try {
    const team = await Teams.findById(req.params.id);
    await team.updateOne({ $set: req.body });
    res.status(200).json('Cập nhập thành công !');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    await Account.updateMany({ team: req.params.id }, { team: null });
    await Teams.findByIdAndDelete(req.params.id);
    res.status(200).json('Xoá thành công !');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
