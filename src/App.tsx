import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Order from "@/pages/Order";
import PlaceOrder from "@/pages/PlaceOrder";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Cart from "@/pages/Cart";
import Login from "@/pages/Login";
import Navbar from "@/components/Navbar";

const App = () => {
  // to understand the md here
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
