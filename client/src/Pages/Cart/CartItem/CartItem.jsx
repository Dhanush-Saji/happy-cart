import "./CartItem.scss";
import prod from "../../../assets/products/headphone-prod-3.webp";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img src={prod} alt="Cart product" />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <MdOutlineDeleteOutline className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span>₹452</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
