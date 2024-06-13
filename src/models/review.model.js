import { pool } from '../config/db.config.js';

export const addReviewToDatabase = async (reviewData) => {
    const conn = await pool.getConnection();
    try {
        const query = `
            INSERT INTO reviews (user_id, product_id, rating, comment, created_at, updated_at)
            VALUES (?, ?, ?, ?, NOW(), NOW())
        `;
        const [result] = await conn.query(query, [
            reviewData.user_id,
            reviewData.product_id,
            reviewData.rating,
            reviewData.comment
        ]);
        conn.release();
        return { reviewId: result.insertId };
    } catch (err) {
        conn.release();
        throw err;
    }
};
