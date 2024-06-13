import ReviewService from '../services/review.service.js';

const addReview = async (req, res) => {
    const { storeId } = req.params;
    const reviewData = req.body;

    try {
        const review = await ReviewService.addReview(storeId, reviewData);
        return res.status(201).json(review);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export { addReview as addReviewController };
