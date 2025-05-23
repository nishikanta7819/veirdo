import React from "react";
import '../css/productcard.css'
import wishlist from "../assets/wishlist.png";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-card">
        <div className="product-card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-card-price">
          <div className="discounted-price">${product.discountPrice}</div>
          <div className="original-price">
            <p>${product.originalPrice}</p>
          </div>
          <div className="price-off">{product.discountText}</div>
        </div>
        <div className="product-card-desc">
          <p>{product.title}</p>
        </div>
        <div className="product-btn">
          <div className="add-to-cart">
            <p>add to cart</p>
          </div>
          <div className="wishlist">
            <img src={wishlist} alt="wishlist" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
