const express = require("express");
const router = express.Router();

const Order = require("../models/Order");

const Product = require("../models/Product");

// ========================================
// POST - Create New Order + Reduce Stock
// ========================================
router.post("/", async (req, res) => {
  try {
    const {
      user,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    } = req.body;

    // Check cart items
    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "No items in the order",
      });
    }

    // Check stock for every product
    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `${product.name} has only ${product.stock} items available`,
        });
      }
    }

    // Reduce stock
for (const item of items) {
  console.log("========== STOCK UPDATE ==========");
  console.log("Product ID:", item.product);
  console.log("Quantity:", item.quantity);

  const updatedProduct = await Product.findByIdAndUpdate(
    item.product,
    {
      $inc: {
        stock: -item.quantity,
      },
    },
    {
      new: true,
    }
  );

  console.log("Updated Product:", updatedProduct);
}

    // Create order
    const order = await Order.create({
      user,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);

    res.status(500).json({
      message: "Failed to place order",
      error: error.message,
    });
  }
});

// ========================================
// GET - Get All Orders
// ========================================
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {
    console.error("GET ORDERS ERROR:", error);

    res.status(500).json({
      message: "Failed to get orders",
      error: error.message,
    });
  }
});

// ========================================
// GET - Get Orders of a Specific User
// ========================================
router.get("/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.params.userId,
    })
      .populate("user")
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (error) {
    console.error("GET USER ORDERS ERROR:", error);

    res.status(500).json({
      message: "Failed to get user orders",
      error: error.message,
    });
  }
});

// ========================================
// GET - Get Single Order
// ========================================
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("items.product");

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json(order);

  } catch (error) {
    console.error("GET ORDER ERROR:", error);

    res.status(500).json({
      message: "Failed to get order",
      error: error.message,
    });
  }
});

// ========================================
// PUT - Update Order Status
// ========================================
router.put("/:id", async (req, res) => {
  try {
    const { orderStatus } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });

  } catch (error) {
    console.error("UPDATE ORDER ERROR:", error);

    res.status(500).json({
      message: "Failed to update order",
      error: error.message,
    });
  }
});

module.exports = router;