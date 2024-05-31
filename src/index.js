import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

// config body-parser
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello word');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
