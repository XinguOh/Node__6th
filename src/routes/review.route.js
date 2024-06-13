import express from 'express';
import { addReviewController } from '../controllers/review.controller.js';

const router = express.Router();

router.post('/stores/:storeId/reviews', addReviewController);

export default router;
