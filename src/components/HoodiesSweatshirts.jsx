import React from "react";
import "../css/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const HoodiesSweatshirts = () => {
  const HoodiesSweatshirts = allProducts.filter(
    (product) => product.type === "hoodies"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Hoodies & Sweatshirts</p>
        </div>
        <div className="nav-link-products-count">
          <p>{HoodiesSweatshirts.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {HoodiesSweatshirts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default HoodiesSweatshirts;
