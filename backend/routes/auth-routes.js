import express from "express";
import { isLoggedIn, logout, signIn, signUp } from "../controllers/auth-controllers.js";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

router.get("/logout", logout);
router.get("/is-logged-in", isLoggedIn);

export default router;