import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { connect } from 'mongoose';
import connectDB from './config/db.js';
import authRoutes from  './routes/authrRoute.js'
import cors from 'cors'


// env
dotenv.config();

//database config
connectDB();
// Rest object
const app = express();

// Rest API
app.get('/', (req, res) => {
  res.send (" <h1> Welcome to ecommerce app</h1>");
});

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

// PORT
const PORT = process.env.PORT || 8080;

// Run
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});
