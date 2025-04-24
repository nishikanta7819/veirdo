import React,{useState} from "react";
import "../css/navbar.css";
import user from "../assets/user.png";
import wishlist from "../assets/wishlist.png";
import cart from "../assets/market.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={"/"}>
          <img
            src="https://veirdo.in/cdn/shop/files/veirdo_logo_1.svg?v=1704692356&width=180"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>oversized t-shirts</li>
          <li>regular fit t-shirts</li>
          <li>new arrivals</li>
          <li>top wear</li>
          <li>bottom wear</li>
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
