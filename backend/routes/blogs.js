import express from 'express';

const router = express.Router();

// Mock database for blogs
let blogs = [];

// GET all blogs
router.get('/', (req, res) => {
    res.json(blogs);
});

// POST a new blog
router.post('/', (req, res) => {
    const { title, content, author } = req.body;

    // Validate required fields
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    // Create a new blog
    const newBlog = {
        id: Date.now().toString(), // Unique ID
        title,
        author: author || 'Community Member', // Default author
        content,
    };

    // Add to the mock database
    blogs.push(newBlog);
    res.status(201).json(newBlog);
});

// DELETE a blog by ID
router.delete('/:id', (req, res) => {
    const blogId = req.params.id; // No need for parseInt
    blogs = blogs.filter(blog => blog.id !== blogId);
    res.status(204).send(); // No content
});

export default router;