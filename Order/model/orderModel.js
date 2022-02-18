const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const orderSchema = new Schema({
    customerId: {
        type:ObjectId,
        require: true
        },
    bookId: {
        type:ObjectId,
        require: true
      },
      initialDate: {
         type: Date,
         require: true
      },
      deliveryDate: {
         type: Date,
         require: false
      }
})

const Order = mongoose.model("order", orderSchema);
module.exports = Order;