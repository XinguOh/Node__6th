// review Response DTO
export const reviewResponseDTO = (user, prefer, reviews) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }

    const reviewData = reviews.map(review => ({
        reviewId: review.review_id,
        productId: review.product_id,
        rating: review.rating,
        comment: review.comment,
        createdAt: review.created_at,
        updatedAt: review.updated_at
    }));

    return {
        email: user[0].email,
        name: user[0].user_name,
        preferCategory: preferFood,
        reviews: reviewData
    };
}
