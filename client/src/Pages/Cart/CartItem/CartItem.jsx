import "./CartItem.scss";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeItems,
} from "../../../Redux/cartSlice";

const CartItem = ({ item }) => {
  let dispatch = useDispatch();
  const qntyChange = (sign) => {
    if (sign == "+") {
      dispatch(increaseProductQuantity(item));
    } else {
      if (item.quantity == 1) {
        dispatch(removeItems(item));
      } else {
        dispatch(decreaseProductQuantity(item));
      }
    }
  };
  const deleteItem = () => {
    dispatch(removeItems(item));
  };
  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img src={item.image.url} alt="Cart product" />
        </div>
        <div className="prod-details">
          <span className="name">{item.title}</span>
          <MdOutlineDeleteOutline className="close-btn" onClick={deleteItem} />
          <div className="quantity-buttons">
            <span
              onClick={() => {
                qntyChange("-");
              }}
            >
              -
            </span>
            <span>{item.quantity}</span>
            <span
              onClick={() => {
                qntyChange("+");
              }}
            >
              +
            </span>
          </div>
          <div className="text">
            <span>{item.quantity}</span>
            <span>x</span>
            <span>₹{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
