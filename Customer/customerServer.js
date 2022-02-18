const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const routes = require("./route/customerRoute");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const port = process.env.port || 5000

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)     
      app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
      console.log(error)
    }
}

start ();