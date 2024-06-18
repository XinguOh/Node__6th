import { getUserReviewsProvider, getUserOngoingMissionsProvider, completeUserMissionProvider } from '../providers/user.provider.js';
import { response, status } from '../config/response.status.js';
import { joinUser } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const getUserReviews = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getUserReviewsProvider(req.params.userId, req.query)));
}

export const getUserOngoingMissions = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getUserOngoingMissionsProvider(req.params.userId)));
}

export const completeUserMission = async (req, res, next) => {
    await completeUserMissionProvider(req.params.userId, req.params.missionId);
    return res.send(response(status.SUCCESS));
}
