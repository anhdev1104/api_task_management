import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import teamsRouter from './routes/teams.js';
import authRouter from './routes/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

connectDb(process.env.MONGODB_URI);
app.use(morgan('dev'));
// config body-parser
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(cookieParser());

app.use('/api/v1', teamsRouter);
app.use('/api/v1', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/api/v1`);
});
