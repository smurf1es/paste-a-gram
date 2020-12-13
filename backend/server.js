import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Constants
const app = express();
const PORT = process.env.PORT || 5000;

// Initialize app
dotenv.config();
connectDB();

// Getter
app.get('/', (req, res) => {
  res.send('Hello, API is up and running!');
});

// Middleware
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use(notFound);
app.use(errorHandler);

// Server listener
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
