import React from "react";
import "../css/bestsellers.css";
import BestsellerCard from "./BestsellerCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
    // Add more if needed
  ];

  return (
    <div className="best-sellers">
      <div className="best-sellers-title">
        <p>our bestsellers</p>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {bestsellersData.map((product) => (
          <SwiperSlide key={product.id}>
            <BestsellerCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bestsellers-btn">
        <button>see more bestsellers</button>
      </div>
    </div>
  );
};

export default BestSellers;
