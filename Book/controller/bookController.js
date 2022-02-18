const Book = require("../model/bookModel")

module.exports = {
    addNewBook: async(req, res)=>{
        try {
            const newBook = new Book ({
                title: req.body.title,
                author: req.body.author,
                numberPages: req.body.numberPages,
                publisher: req.body.publisher
            })
            await newBook.save();
            res.json({
                data:newBook,
                message: "You have successfully added new book"
            })
        } catch (error) {
            res.status(400).json(error)
            
        }
    },

    getBook: async(req, res)=>{
        const bookId = req.params.bookId
        const book = await Book.findById(bookId)

        if (book) {
            res.json({
                data:book
            })
        } else {
            res.json({
                message: "Book not found. pls check another book"
            })
        }
    },

    getBooks: async(req,res)=>{
        try {
            const books = await Book.find({});
            res.status(200).json({
                data:books
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    deleteBook: async(req, res, next)=>{
        try {
            const bookId = req.params.bookId;
            await Book.findByIdAndDelete(bookId);
            res.json({
                message:"Book deleted successfuly"
            })
        } catch (error) {
            next(error)
        };
    }
}