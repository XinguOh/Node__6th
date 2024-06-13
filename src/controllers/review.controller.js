import { addReviewService } from '../services/review.service.js';
import { response } from '../config/response.js';
import { status } from '../config/response.status.js';

export const addReview = async (req, res, next) => {
    try {
        const reviewData = req.body;
        const result = await addReviewService(reviewData);
        res.status(200).send(response(status.SUCCESS, result));
    } catch (err) {
        next(err);
    }
};
