import express from "express";
import { getUserInfo } from "../controllers/user-controllers.js";

const router = express.Router();

router.get("/me", getUserInfo);

export default router;