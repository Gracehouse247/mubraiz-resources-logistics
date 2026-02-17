const express = require('express');
const Post = require('../models/Post');
const { requireAuth } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const slugify = require('slugify');

const router = express.Router();

// Get all published posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll({
            where: { isPublished: true },
            order: [['publishedAt', 'DESC']]
        });
        res.json({ posts });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Get post by slug
router.get('/:slug', async (req, res) => {
    try {
        const post = await Post.findOne({
            where: { slug: req.params.slug, isPublished: true }
        });
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json({ post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
    }
});

// Create post (Admin Only)
router.post('/', requireAuth(), checkRole(['super_admin', 'executive']), async (req, res) => {
    try {
        const { title, content, excerpt, category, image } = req.body;
        const slug = slugify(title, { lower: true, strict: true });

        const post = await Post.create({
            title,
            slug,
            content,
            excerpt,
            category,
            image,
            authorId: req.auth.userId,
            isPublished: req.body.isPublished || false,
            publishedAt: req.body.isPublished ? new Date() : null
        });

        res.status(201).json({ success: true, post });
    } catch (error) {
        console.error('Create Post Error:', error);
        res.status(500).json({ error: 'Failed to create post' });
    }
});

module.exports = router;
