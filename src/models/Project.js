import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    startday: {
      type: String,
    },
    teamsize: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
