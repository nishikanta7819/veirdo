import React from 'react'
import "../css/nav-links-products.css";
import allProducts from "../alllProducts";
import ProductCard from "./ProductCard";

const BottomWear = () => {
    const BottomWear = allProducts.filter(
    (product) => product.type === "cargos"
  );
  return (
    <div className="nav-link-products">
      <div className="nav-link-products-heading">
        <div className="nav-link-products-title">
          <p>Cargo Pants for Men</p>
        </div>
        <div className="nav-link-products-count">
          <p>{BottomWear.length} items</p>
        </div>
      </div>
      <div className="nav-link-all-products">
        {BottomWear.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  )
}

export default BottomWear