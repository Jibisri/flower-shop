const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dns = require("dns");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    console.log("Database name:", mongoose.connection.name);
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});