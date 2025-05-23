import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../css/collection.css";
import ProductCard from "./ProductCard";
import Btn from "./Btn";
import allProducts from "../alllProducts";

const Collection = () => {
  const centrestageproducts = allProducts.filter((product) => {
    return product.centrestage === "yes";
  });

  return (
    <div className="collections">
      <div className="collections-title">
        <p>centre stage collection</p>
      </div>
      <div className="collections-products">
        {centrestageproducts.map((product) => (
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
