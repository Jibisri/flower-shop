import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AdminProducts from "./pages/AdminProducts";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <CustomNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/admin-products" element={<AdminProducts />} />  
      </Routes>

      <Footer />
    </>
  );
}

export default App;