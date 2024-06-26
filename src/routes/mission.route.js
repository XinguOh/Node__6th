import express from 'express';
import { addMissionController } from '../controllers/mission.controller.js';
import { challengeMissionController } from '../controllers/challenge.controller.js';

const router = express.Router();

router.post('/stores/:storeId/missions', addMissionController);
router.post('/missions/:missionId/challenges', challengeMissionController);

export default router;
