import "../css/collectionscard.css";
import wishlist from "../assets/wishlist.png";

function CollectionsCard({ product }) {
  return (
    <div className="bestseller-card">
      <div className="bestseller-card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="bestseller-card-price">
        <div className="discounted-price">${product.discountPrice}</div>
        <div className="original-price">
          <p>${product.originalPrice}</p>
        </div>
        <div className="price-off">{product.discountText}</div>
      </div>
      <div className="bestseller-card-desc">
        <p>{product.title}</p>
      </div>
      <div className="bestseller-btn">
        <div className="add-to-cart">
          <p>add to cart</p>
        </div>
        <div className="wishlist">
          <img src={wishlist} alt="wishlist" />
        </div>
      </div>
    </div>
  );
}

export default CollectionsCard;
