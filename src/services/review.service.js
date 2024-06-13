import { addReviewToDatabase } from '../models/review.model.js';
import { BaseError } from '../config/error.js';
import { status } from '../config/response.status.js';

export const addReviewService = async (reviewData) => {
    try {
        const result = await addReviewToDatabase(reviewData);
        return result;
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};
