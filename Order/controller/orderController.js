const Order = require ("../model/orderModel");
const axios =require("axios");

module.exports = {
    makeOrder: async(req, res)=>{
        try {
            const newOrder = new Order ({
                customerId:mongoose.Types.ObjectId(req.body.customerId),
                bookId: mongoose.Types.ObjectId(req.body.bookId),
                initialDate: req.body.initialDate,
                deliveryDate: req.body.deliveryDate
            })
            await newOrder.save();
            res.json({
                message: "New order added successfully",
                data: newOrder
            })
        } catch (error) {
            res.status(500).json({
                message: "Order failed"
            })
        }
    },

    getOrders: async(req, res, next)=>{
        try {
            const orders = await Order.find({})
            res.json({
                data:orders
            })
        } catch (error) {
            next(error)
        }
    },

    getOrder: async(req, res)=>{
        try {
            const orderId = req.params.orderId;
            const order = await Order.findById(orderId);
            if (order) {
            axios.get('http://localhost:5000/customer/' +order.customerId).then((response) => {
                let customerName = response.data.data.name;
                let bookTitle = " "
         let orderObject = { 
           customerName,
           bookTitle 
          }
        axios.get('http://localhost:3000/book/' +order.bookId).then((response) => {
         orderObject.bookTitle = response.data.data.title 
         res.json(orderObject);
        })
   })	
            }  
        } catch (error) {
            res.json({
                message: "order not found"
            })
        }
    }
}