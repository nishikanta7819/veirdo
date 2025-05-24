import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";
import user from "../assets/user.png";
import wishlist from "../assets/wishlist.png";
import cart from "../assets/market.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div className="navbar-logo">
        <Link to={"/"}>
          <img
            src="https://veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=180"
            alt=""
          />
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => navigate("/oversized-tshirts")}>
            oversized t-shirts
          </li>
          <li onClick={() => navigate("/polo-tshirts")}>polo t-shirts</li>
          <li onClick={() => navigate("/hoodies")}>hoodies & sweatshirts</li>
          <li onClick={() => navigate("/classic-fit-tshirts")}>classic fit t-shirts</li>
          <li onClick={() => navigate("/bottom-wears")}>bottom wears</li>
          <li>merchandise</li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="search" placeholder="Try searching" />
      </div>
      <div className="navbar-btns">
        <Link to="/profile">
          <img src={user} alt="" />
        </Link>
        <Link to="/wishlist">
          <img src={wishlist} alt="" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
