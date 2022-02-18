const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema ({
    name: {
        type: String,
        require: true
     },
     age: {
        type: Number,
        require: true
     },
     address: {
       type: String,
       require: true
     }
})

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;