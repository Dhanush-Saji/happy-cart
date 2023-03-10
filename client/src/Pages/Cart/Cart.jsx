import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const {cartItems,total} = useSelector((store)=>store.cart) || []
  return (
    <div className="cart-panel">
      <div className="cart-content">
        {
          cartItems.length>0?(
            cartItems.map((item,id)=>(

              <CartItem item={item} key={id} />
            ))
          ):(
            <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart</span>
        </div>
          )
        }
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">₹{total}</span>
            </div>
              <div className="button">
                <Button w='100%' bg={'#8e2de2'} _hover={{bg:'#6d1eb3'}} color='white'>Checkout</Button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
