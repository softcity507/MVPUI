import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import ghlRoutes from './routes/ghlRoutes.js';
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',   
 }));


app.get('/',(req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes); 
app.use('/api/ghl', ghlRoutes);


 

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));