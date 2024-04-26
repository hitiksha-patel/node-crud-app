const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route")

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended :false }));

app.listen(2000, () => {
  console.log("running on 2000");
});

//routes
app.use("/api/products", productRoute);


//database connection
mongoose
  .connect(
    "mongodb+srv://hitikshapatel23:xKAXgo7ITcA5e69v@cluster0.ex40xul.mongodb.net/Node_crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });
