import React from "react";
import "../css/bestsellers.css";
import ProductCard from "./ProductCard";
import Btn from "./Btn";
import allProducts from "../alllProducts";

const BestSellers = () => {
  const bestsellersData = allProducts.filter((product) => {
    return product.bestseller === "yes";
  });

  return (
    <div className="best-sellers">
      <div className="best-sellers-title">
        <p>our bestsellers</p>
      </div>
      <div className="best-sellers-cards">
        {bestsellersData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="bestsellers-btn">
        <Btn>see more bestsellers</Btn>
      </div>
    </div>
  );
};

export default BestSellers;
