import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todos-controllers.js";

const router = express.Router();

router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

router.get("/all", getAllTodos);

export default router;