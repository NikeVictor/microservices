const express = require('express');
const router = express.Router();
const bookController = require("../controller/bookController");

router.post("/create", bookController.addNewBook);
router.get("/book/:bookId", bookController.getBook);
router.get("/books", bookController.getBooks);
router.delete("/book/:bookId", bookController.deleteBook);

module.exports = router;