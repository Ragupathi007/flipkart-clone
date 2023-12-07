import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import supabase from "./supabase";

import { setUser } from "./slices/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data.session) {
      dispatch(setUser(data.session.user));
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
