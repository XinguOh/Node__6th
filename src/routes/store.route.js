import express from 'express';
import { addStoreController } from '../controllers/store.controller.js';

const router = express.Router();

router.post('/regions/:regionId/stores', addStoreController);

export default router;
