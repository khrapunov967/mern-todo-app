import express from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import todoRoutes from "../routes/todo-routes.js";
import authRoutes from "../routes/auth-routes.js";

const router = express.Router();

router.use("/todo", checkAuth, todoRoutes);
router.use("/auth", authRoutes);

export default router;