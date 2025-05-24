import React from "react";
import Navbar from "./components/Navbar";
import VeirdoHero from "./components/VeirdoHero";
import VeirdoFooter from "./components/VeirdoFooter";
import BestSellers from "./components/BestSellers";
import Collection from "./components/Collection";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import OverSizedTshirt from "./components/OverSizedTshirt";
import Aboutus from "./components/Aboutus";
import Merch from "./components/Merch";
import BottomWear from "./components/BottomWear";
import NewArrivals from "./components/NewArrivals";
import HoodiesSweatshirts from "./components/HoodiesSweatshirts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <VeirdoHero />
              <BestSellers />
              <Collection />
              <NewArrivals />
              <Aboutus />
              <Merch />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/oversized-tshirt" element={<OverSizedTshirt />} />
        <Route path="/bottom-wear" element={<BottomWear />} />
        <Route path="/hoodies" element={<HoodiesSweatshirts />} />
      </Routes>
      <VeirdoFooter />
    </div>
  );
};

export default App;
