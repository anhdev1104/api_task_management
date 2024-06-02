import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      default: 'employee',
    },
    status: {
      type: String,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teams',
    },
  },
  { timestamps: true, versionKey: false }
);

const Account = mongoose.model('Account', accountSchema);

export default Account;
