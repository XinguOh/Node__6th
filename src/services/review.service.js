import { Review, reviews } from '../models/review.model.js';
import { stores } from '../models/store.model.js';

const addReview = (storeId, reviewData) => {
    const store = stores.find(store => store.id === storeId);
    if (!store) {
        throw new Error('Store not found');
    }

    const review = new Review({ ...reviewData, storeId });
    reviews.push(review);
    return review;
};


export default { addReview };