const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: {
        type: String,
        require: true
      },
      author: {
         type: String,
         require: true
      },
      numberPages: {
          type: Number,
          require: false
      },
      publisher: {
          type: String,
          require: false
      }
})

const Book = mongoose.model("book", bookSchema);

module.exports = Book;