const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const Product = require("./models/Product");

const products = [
  {
    name: "Purple Orchid Bouquet",
    price: 699,
    category: "Bouquet",
    stock: 10,
    image: "Purple Orchid Bouquet",
  },
  {
    name: "Rose Bouquet",
    price: 599,
    category: "Bouquet",
    stock: 10,
    image: "Rose Bouquet",
  },
  {
    name: "Mixed Flower Basket",
    price: 899,
    category: "Bouquet",
    stock: 10,
    image: "Mixed Flower Basket",
  },
  {
    name: "Red Roses Bouquet",
    price: 799,
    category: "Bouquet",
    stock: 10,
    image: "Red Roses Bouquet",
  },
  {
    name: "Yellow Sunflowers",
    price: 699,
    category: "Loose Flowers",
    stock: 10,
    image: "Yellow Sunflowers",
  },
  {
    name: "Sunflowers Bunch",
    price: 799,
    category: "Loose Flowers",
    stock: 10,
    image: "Sunflowers Bunch",
  },
  {
    name: "White Lilies",
    price: 899,
    category: "Garland",
    stock: 10,
    image: "White Lilies",
  },
  {
    name: "Pink Peonies",
    price: 999,
    category: "Garland",
    stock: 10,
    image: "Pink Peonies",
  },
  {
    name: "Red Roses",
    price: 799,
    category: "Bouquet",
    stock: 10,
    image: "Red Roses",
  },
  {
    name: "Blue Orchid",
    price: 1299,
    category: "Orchid",
    stock: 10,
    image: "Blue Orchid",
  },
  {
    name: "Mixed Orchids",
    price: 1499,
    category: "Orchid",
    stock: 10,
    image: "Mixed Orchids",
  },
  {
    name: "Pink Bouquet",
    price: 1299,
    category: "Bouquet",
    stock: 10,
    image: "Pink Bouquet",
  },
  {
    name: "Sevanthi",
    price: 599,
    category: "pooja",
    stock: 10,
    image: "Sevanthi",
  },
  {
    name: "White Sevanthi",
    price: 499,
    category: "pooja",
    stock: 10,
    image: "White Sevanthi",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products added successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  }
};

seedProducts();