import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg',
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
