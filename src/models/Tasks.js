import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
    level: {
      type: String,
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Account',
    },
    status: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;
