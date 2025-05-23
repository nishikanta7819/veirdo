import React from "react";
import "../css/newarrivals.css";
import ProductCard from "./ProductCard";
import Btn from "./Btn";
import allProducts from "../alllProducts";

const NewArrivals = () => {
  const newarrivalsproducts = allProducts.filter((product) => {
    return product.newarrivals === "yes";
  });
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-title">
        <p>new arrivals</p>
      </div>
      <div className="new-arrivals-cards">
        {newarrivalsproducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="new-arrivals-btn">
        <Btn>see all new arrivals</Btn>
      </div>
    </div>
  );
};

export default NewArrivals;
