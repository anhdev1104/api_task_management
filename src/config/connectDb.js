import mongoose from 'mongoose';

const connectDb = async uri => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(`MongoDB connected SUCCES: ${connect.connection.host}...`);
  } catch (error) {
    console.error(`MongoDB connection ERROR: ${error.message}!!!`);
    process.exit(1);
  }
};

export default connectDb;
