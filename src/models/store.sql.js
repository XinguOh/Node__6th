export const getStoreMissionsQuery = 
"SELECT mission_id, mission_name, description, reward "
+ "FROM missions "
+ "WHERE store_id = ?;"
