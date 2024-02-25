import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Products from "./pages/product/Products";
import Cart from "./pages/cart/Cart";
import Favorite from "./pages/favorite/Favorite";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
