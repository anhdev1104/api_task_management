import Tasks from '../models/Tasks.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find().populate('project').populate('assignee');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTaskId = async (req, res) => {
  try {
    const tasks = await Tasks.findById(req.params.id).populate('project').populate('assignee');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    await Tasks.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json('Cập nhập thành công !');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTasks = async (req, res) => {
  try {
    const newTasks = new Tasks(req.body);
    const saveTasks = await newTasks.save();
    res.status(200).json(saveTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id);
    res.status(200).json('Xoá thành công !');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
