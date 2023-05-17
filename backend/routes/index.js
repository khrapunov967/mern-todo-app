import express from "express";
import todoRoutes from "../routes/todo-routes.js";

const router = express.Router();

router.use("/todo", todoRoutes);

export default router;