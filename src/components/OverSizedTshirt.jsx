import React from "react";
import "../css/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const OverSizedTshirt = () => {
  const OverSizedTshirt = allProducts.filter(
    (product) => product.type === "oversized-tshirt"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>T Shirts for Men</p>
        </div>
        <div className="nav-link-products-count">
          <p>8 Items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {OverSizedTshirt.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default OverSizedTshirt;
