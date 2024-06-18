export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const getUserReviewsByUserId = 
"SELECT s.store_name, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getUserReviewsByUserIdAtFirst = 
"SELECT s.store_name, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN store s on r.store_id = s.store_id "
+ "WHERE r.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getUserOngoingMissionsQuery = 
"SELECT m.mission_id, m.mission_name, m.description, um.progress "
+ "FROM user_missions um JOIN missions m on um.mission_id = m.mission_id "
+ "WHERE um.user_id = ? AND um.status = 'ongoing';"

export const completeUserMissionQuery = 
"UPDATE user_missions "
+ "SET status = 'completed' "
+ "WHERE user_id = ? AND mission_id = ? AND status = 'ongoing';"
