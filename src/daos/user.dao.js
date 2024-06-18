import { pool } from '../config/db.config.js';
import { getUserReviewsByUserId, getUserReviewsByUserIdAtFirst, getUserOngoingMissionsQuery, completeUserMissionQuery } from '../models/user.sql.js';
import { BaseError } from '../config/error.js';
import { status } from "../config/response.status.js";

export const getUserReviewsDAO = async (userId, cursorId, size) => {
    try {
        const conn = await pool.getConnection();

        if (cursorId === "undefined" || typeof cursorId === "undefined" || cursorId == null) {
            const [reviews] = await pool.query(getUserReviewsByUserIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            return reviews;
        } else {
            const [reviews] = await pool.query(getUserReviewsByUserId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const getUserOngoingMissionsDAO = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [missions] = await pool.query(getUserOngoingMissionsQuery, [parseInt(userId)]);
        conn.release();
        return missions;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

export const completeUserMissionDAO = async (userId, missionId) => {
    try {
        const conn = await pool.getConnection();
        await pool.query(completeUserMissionQuery, [parseInt(userId), parseInt(missionId)]);
        conn.release();
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
