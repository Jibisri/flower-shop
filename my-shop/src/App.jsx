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
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import AdminOrders from "./pages/AdminOrders";
import AdminDashboard from "./pages/AdminDashboard";
import Categories from "./components/Categories";
import AdminRoute from "./components/AdminRoute";

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


        <Route path="/add-product" element={<AdminRoute><AddProduct /> </AdminRoute>} />
        <Route path="/edit-product/:id" element={<AdminRoute><EditProduct /> </AdminRoute>} />
        <Route path="/admin-products" element={<AdminRoute><AdminProducts /> </AdminRoute>} />
        <Route path="/checkout" element={<Checkout />} />  
        <Route path="/my-orders" element={<MyOrders />} />  
        <Route path="/admin-orders" element={<AdminRoute><AdminOrders /> </AdminRoute>} />  
        <Route path="/admin" element={<AdminRoute><AdminDashboard /> </AdminRoute> } />  
      </Routes>

      <Footer />
    </>
  );
}

export default App;