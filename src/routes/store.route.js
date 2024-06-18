import express from 'express';
import asyncHandler from 'express-async-handler';
import { getStoreMissions } from '../controllers/store.controller.js';

const storeRouter = express.Router({ mergeParams: true });

storeRouter.get('/:storeId/missions', asyncHandler(getStoreMissions));

export default storeRouter;
