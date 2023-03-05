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

const Cart = () => {
  return (
    <div className="cart-panel">
      <div className="cart-content">
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No products in the cart</span>
          <button className="return-cta">RETURN TO SHOP</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">₹451</span>
            </div>
              <div className="button">
                <Button w='100%' bg={'#8e2de2'} _hover={{bg:'#6d1eb3'}} color='white'>Checkout</Button>
              </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
