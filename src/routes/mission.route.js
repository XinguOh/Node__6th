import express from "express";
import asyncHandler from 'express-async-handler';

import { Mission } from "../controllers/mission.controller.js";

export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));