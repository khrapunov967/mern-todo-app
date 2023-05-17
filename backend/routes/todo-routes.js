import express from "express";
import { getAllTodo } from "../controllers/todo-controllers.js";

const router = express.Router();

router.use("/all", getAllTodo);

export default router;