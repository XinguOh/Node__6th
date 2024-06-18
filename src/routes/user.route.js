import express from 'express';
import asyncHandler from 'express-async-handler';
import { userSignin, getUserReviews, getUserOngoingMissions, completeUserMission } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/signin', asyncHandler(userSignin));
router.get('/:userId/reviews', asyncHandler(getUserReviews));
router.get('/:userId/ongoing-missions', asyncHandler(getUserOngoingMissions));
router.put('/:userId/ongoing-missions/:missionId/complete', asyncHandler(completeUserMission));

export default router;
