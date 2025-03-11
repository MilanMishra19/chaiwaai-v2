import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import blogRoutes from './routes/blogs.js';
import userRoutes from './routes/user.js'; // Import user routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/user', userRoutes); // Add user routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});