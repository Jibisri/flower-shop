const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get products",
      error: error.message
    });
  }
});

// POST - Add new product
router.post("/", async (req, res) => {
  try {
    const { name, price, category, stock, image } = req.body;

    const product = await Product.create({
      name,
      price,
      category,
      stock,
      image
    });

    res.status(201).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to add product",
      error: error.message
    });
  }
});

// PUT - Update product
router.put("/:id", async (req, res) => {
  try {
    const { name, price, category, stock, image } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name,
        price,
        category,
        stock,
        image
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product
    });

  } catch (error) {
    console.error("PUT PRODUCT ERROR:", error);

    res.status(500).json({
      message: "Failed to update product",
      error: error.message
    });
  }
});


// DELETE - Delete product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    res.status(500).json({
      message: "Failed to delete product",
      error: error.message
    });
  }
});

module.exports = router;