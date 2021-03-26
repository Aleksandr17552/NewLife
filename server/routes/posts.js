import express from 'express';
import postController from '../controller/post.controller'
const router = express.Router();

router.post('/', postController.createPost);
router.get('/', postController.getPostsByUser);

export default router;
