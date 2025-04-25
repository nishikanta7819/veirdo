import React from "react";
import "../css/bestsellers.css";
import BestsellerCard from "./BestsellerCard";

const BestSellers = () => {
  const bestsellersData = [
    {
      id: 1,
      image:
        "https://veirdo.in/cdn/shop/files/5_1_45b82bbc-f648-4ca5-a2cd-97f50e53be93.jpg?v=1732275230&width=533",
      title: "Originals Beige Oversized Graphic print",
      discountPrice: 549,
      originalPrice: 1199,
      discountText: "54% off",
    },
    {
      id: 2,
      image:
        "https://veirdo.in/cdn/shop/files/Artboard_14.png?v=1725010011&width=533",
      title: "Punk Beige Oversized",
      discountPrice: 699,
      originalPrice: 1399,
      discountText: "50% off",
    },
    {
      id: 3,
      image:
        "https://veirdo.in/cdn/shop/files/vb200.jpg?v=1728462042&width=533",
      title: "Veirdo Original Beige Oversized",
      discountPrice: 899,
      originalPrice: 1799,
      discountText: "50% off",
    },
    // Add more as needed
  ];

  return (
    <div className="best-sellers">
      <div className="best-sellers-title">
        <p>our bestsellers</p>
      </div>
          <div className="best-sellers-products">
            {bestsellersData.map((product) => (
              <BestsellerCard key={product.id} product={product} />
            ))}
          </div>
      <div className="bestsellers-btn">
        <button>see more bestsellers</button>
      </div>
    </div>
  );
};

export default BestSellers;
