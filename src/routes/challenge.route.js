import express from 'express';
import { challengeMissionController } from '../controllers/challenge.controller.js';

const router = express.Router();

router.post('/missions/:missionId/challenges', challengeMissionController);

export default router;
