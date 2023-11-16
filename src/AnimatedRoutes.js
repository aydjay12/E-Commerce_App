import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/post" element={<Home></Home>}></Route>
        {/* <Route path="/post/:id" element={<Single></Single>}></Route> */}
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/productlist"
          element={<ProductList></ProductList>}
        ></Route>
        <Route path="/product" element={<Product></Product>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
