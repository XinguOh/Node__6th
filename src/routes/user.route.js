import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.controller.js";

const router = express.Router();

router.post('/signin', asyncHandler(userSignin));

export default router;
