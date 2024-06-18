// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}
const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

//리뷰 반환
export const userReviewResponseDTO = (data) => {
    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "store_name": data[i].store_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        });
    }
    return { "reviewData": reviews, "cursorId": data[data.length - 1].review_id };
}
// 진행 중인 미션 반환
export const userOngoingMissionsResponseDTO = (data) => {
    const missions = [];
    for (let i = 0; i < data.length; i++) {
        missions.push({
            "mission_id": data[i].mission_id,
            "mission_name": data[i].mission_name,
            "description": data[i].description,
            "progress": data[i].progress
        });
    }
    return { "missionData": missions };
}