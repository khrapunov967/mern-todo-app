import express from "express";
import { getAllTodos } from "../controllers/todo-controllers.js";

const router = express.Router();

router.get("/all", getAllTodos);

export default router;