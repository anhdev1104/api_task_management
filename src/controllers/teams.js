import Teams from '../models/Teams.js';

export const getTeams = async (req, res) => {
  try {
    res.status(200).json('get all teams');
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
