import { getUserReviewsDAO, getUserOngoingMissionsDAO, completeUserMissionDAO } from '../daos/user.dao.js';
import { userReviewResponseDTO, userOngoingMissionsResponseDTO } from '../dtos/user.dto.js';

export const getUserReviewsProvider = async (userId, query) => {
    const { reviewId, size = 3 } = query;
    return userReviewResponseDTO(await getUserReviewsDAO(userId, reviewId, size));
}

export const getUserOngoingMissionsProvider = async (userId) => {
    return userOngoingMissionsResponseDTO(await getUserOngoingMissionsDAO(userId));
}

export const completeUserMissionProvider = async (userId, missionId) => {
    await completeUserMissionDAO(userId, missionId);
}
