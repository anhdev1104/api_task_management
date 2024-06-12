import Project from '../models/Project.js';

export const getProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectId = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    await Project.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json('Cập nhập thành công !');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saveProject = await newProject.save();
    res.status(200).json(saveProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json('Xoá thành công !');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
