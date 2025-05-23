import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../css/collection.css";
import ProductCard from "./ProductCard";
import Btn from "./Btn";

const Collection = () => {
  const collectionsData = [
    {
      id: 1,
      image:
        "https://veirdo.in/cdn/shop/files/01_0008_3_6ce7ad26-f824-4bd5-835a-acb335d4172e.jpg?v=1732942012&width=533",
      title: "Originals Beige Oversized Graphic print",
      discountPrice: 799,
      originalPrice: 1999,
      discountText: "60% off",
    },
    {
      id: 2,
      image:
        "https://veirdo.in/cdn/shop/files/01_0008_1.jpg?v=1732942572&width=533",
      title: "Punk Beige Oversized",
      discountPrice: 799,
      originalPrice: 1999,
      discountText: "60% off",
    },
    {
      id: 3,
      image:
        "https://veirdo.in/cdn/shop/files/1_13_8756eefd-b3b7-490b-b214-695f131da9c5.jpg?v=1734944479&width=533",
      title: "Veirdo Original Beige Oversized",
      discountPrice: 699,
      originalPrice: 1499,
      discountText: "53% off",
    },
    {
      id: 4,
      image:
        "https://veirdo.in/cdn/shop/files/1_13_8756eefd-b3b7-490b-b214-695f131da9c5.jpg?v=1734944479&width=533",
      title: "Veirdo Original Beige Oversized",
      discountPrice: 699,
      originalPrice: 1499,
      discountText: "53% off",
    },
    // Add more as needed
  ];

  return (
    <div className="collections">
      <div className="collections-title">
        <p>centre stage collection</p>
      </div>
      <div className="collections-products">
        {collectionsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="collections-btn">
        <Btn>explore all products</Btn>
      </div>
    </div>
  );
};

export default Collection;
