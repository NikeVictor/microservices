const Customer = require("../model/customerModel");

module.exports = {
    signup: async(req,res)=>{
        try {
            newCustomer = new Customer({
                name: req.body.name,
                age: req.body.age,
                address: req.body.address
            })
            await newCustomer.save();
            res.json({
                data:newCustomer,
                message: "New customer created successfully"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    getCustomer: async(req, res, next)=>{
       try {
        const customerId = req.params.customerId;
        const customer = await Customer.findById(customerId);
        if (customer) {
            res.json({
                data: customer
            })
        } else {
            res.json({
                message: "The customer does not exist."
            })
        }
       } catch (error) {
           next(error)
       }
    },

    getCustomers: async(req, res, nest)=>{
        try {
            const customers = await Customer.find({})
            res.json({
                data:customers
            })
        } catch (error) {
            next(error)
        }
    },

    updateCustomer: async(req, res)=>{
        try {
            const customerId = req.params.customerId;
            const customer = await Customer.findByIdAndUpdate(customerId);
            if(customer){
                res.json({
                    data:customer
                })
            }
        } catch (error) {
            res.status(500).json({
                message: "Customer not found"
            })
        }
    },

    deleteCustomer:async(req, res)=>{
        try {
            const customerId = req.params.customerId;
            const customer =await Customer.findOneAndDelete(customerId);
            if(customer){
                res.json({
                    message: "Customer is deleted successfully."
                })
            }
        } catch (error) {
            res.json({
                message: "Customer not deleted."
            })
        }
    }
}