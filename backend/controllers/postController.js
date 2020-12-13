import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc Fetch all posts
// @route GET /api/posts
// @access Public (logged in)
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
});

// @desc Create a post
// @route POST /api/posts
// @access Public (logged in)
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
    user: req.user._id,
    image: req.body.image,
    text: req.body.text,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

// @desc Delete your own post
// @route DELETE /api/posts/:id
// @access Private/User
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    await post.remove();
    res.json({ message: 'Post removed' });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

export { getPosts, createPost, deletePost };
