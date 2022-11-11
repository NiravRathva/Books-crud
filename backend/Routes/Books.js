import express from "express"
import {addBook,updateBook,deleteBook,getAllBooks} from"../Controllers/Books.js";
const router = express.Router()

router.post("/",addBook)
router.get("/get",getAllBooks)
router.put("/:id",updateBook)
router.delete("/:id",deleteBook)

export default router;