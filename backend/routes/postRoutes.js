import express from 'express';
import {
  getPosts,
  createPost,
  deletePost,
} from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';

// Initialize router
const router = express.Router();

// Routes
router.route('/').get(protect, getPosts).post(protect, createPost);
router.delete('/:id', deletePost);

export default router;
