import { checkAuth } from "../middlewares/checkAuth.js";
import express from "express";
import todoRoutes from "../routes/todos-routes.js";
import authRoutes from "../routes/auth-routes.js";
import userRoutes from "../routes/user-routes.js";

const router = express.Router();

router.use("/todo", checkAuth, todoRoutes);
router.use("/user", checkAuth, userRoutes);
router.use("/auth", authRoutes);

export default router;