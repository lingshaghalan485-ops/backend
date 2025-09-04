import { Router } from "express";
import{ createSchool, getSchool, getSchoolById,deleteSchool } from "../controllers/school.controller.js";

const router = Router();


// http://localhost:8000/books/
router.get("/", getSchool);
// http://localhost:8000/books/1
router.get("/:id",getSchoolById);
router.delete("/",deleteSchool);
export default router;