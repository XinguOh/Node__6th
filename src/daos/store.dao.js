import { pool } from '../config/db.config.js';
import { getStoreMissionsQuery } from '../models/store.sql.js';
import { BaseError } from '../config/error.js';
import { status } from '../config/response.status.js';

export const getStoreMissionsDAO = async (storeId) => {
    try {
        const conn = await pool.getConnection();
        const [missions] = await pool.query(getStoreMissionsQuery, [parseInt(storeId)]);
        conn.release();
        return missions;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}
