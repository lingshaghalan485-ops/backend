import { Router } from "express";
import{ createUser,getMyProfile,getUser,login } from "../controllers/auth.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();
router.post("/register", createUser);
router.post("/login",login);
router.get("/",getUser);
router.get("/me",auth,getMyProfile)
export default router;