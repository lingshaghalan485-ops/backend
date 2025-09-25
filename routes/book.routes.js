import { Router } from "express";
import{ createBook, getBook, getBookById, updateBook, deleteBook} from "../controllers/book.controller.js";
import{auth} from "../middlewares/auth.js";
const router = Router();
router.use(auth);

// http://localhost:8000/books/
router.get("/", getBook);
// http://localhost:8000/books/1
router.get("/",getBookById)
router.put("/",updateBook)
router.delete("/",deleteBook)
   export default router;
