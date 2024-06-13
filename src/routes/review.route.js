import express from 'express';
import { addReview } from '../controllers/review.controller.js';

export const reviewRouter = express.Router();

reviewRouter.post('/add', addReview);
