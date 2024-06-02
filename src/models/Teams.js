import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Teams = mongoose.model('Teams', teamSchema);

export default Teams;
