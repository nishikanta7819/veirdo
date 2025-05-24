import React from "react";
import allProducts from "../alllProducts";
import "../css/nav-links-products.css";
import ProductCard from "./ProductCard";

const PoloTShirts = () => {
  const PoloTShirt = allProducts.filter(
    (product) => product.type === "polo-tshirts"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-banner">
        {/* <img src="" alt="" /> */}
      </div>
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Polo T-Shirts</p>
        </div>
        <div className="nav-link-products-count">
          <p>{PoloTShirt.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {PoloTShirt.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default PoloTShirts;
