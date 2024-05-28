import express from 'express';
import { tempTest } from '../controllers/temp.controller.js';
import { tempException } from '../controllers/temp.controller.js';
import { mission } from '../controllers/temp.controller.js';
export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);
tempRouter.get('/exception/:flag',tempException);
tempRouter.get('/missions/:missionStatus', mission);