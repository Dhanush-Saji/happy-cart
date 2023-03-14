import "./Cart.scss";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { checkoutStripe } from "../../API/APICalls";
import {ToastContainer } from "react-toastify";
import { useRef } from "react";

const Cart = ({ handleCloseCart }) => {
  const cancelRef = useRef();
  const {
    isOpen: isOpenCheckout,
    onOpen: onOpenCheckout,
    onClose: onCloseCheckout,
  } = useDisclosure();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cartItems: cartData, total } = useSelector((store) => store.cart);
  const userData = useSelector((store) => store.user.user);
  const checkoutDialog = () => {
    let data = {
      pathname,
    };
    if (userData) {
      onOpenCheckout();
    } else {
      navigate("/login", { state: data });
      handleCloseCart();
    }
  };
  const checkoutFn = () => {
    const updatedCart = cartData.map((item) => {
      let imageurl = item.image.url;
      const { category, color, createdAt, updatedAt, image, __v, ...rest } =
        item; // using object destructuring to exclude "des" property
      return { imageurl, ...rest };
    });
    let payload = {
      cartItems: updatedCart,
      userId: userData._id,
    };

    checkoutStripe(payload);
    handleCloseCart();
    onCloseCheckout();
  };
  return (
    <div className="cart-panel">
      <div className="cart-content">
        {cartData.length > 0 ? (
          cartData.map((item, id) => <CartItem item={item} key={id} />)
        ) : (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
          </div>
        )}
        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal:</span>
            <span className="text total">₹{total}</span>
          </div>
          <Tooltip
            w="80%"
            isDisabled={userData ? false : true}
            hasArrow
            arrowSize={15}
            placement="top"
            label={`This is a test account. In order to complete the payment, enter the card number '4242 4242 4242 4242'.`}
            bg="gray.300"
            color="black"
          >
            <div className="button">
              <Button
                w="100%"
                bg={"#8e2de2"}
                _hover={{ bg: "#6d1eb3" }}
                color="white"
                onClick={checkoutDialog}
              >
                {userData ? "Checkout" : "Login"}
              </Button>
            </div>
          </Tooltip>
        </div>
      </div>
      <AlertDialog
        isOpen={isOpenCheckout}
        leastDestructiveRef={cancelRef}
        onClose={onCloseCheckout}
      >
        <AlertDialogOverlay>
          <AlertDialogContent w={{ base: "90%", md: "100%" }}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Payment Info
            </AlertDialogHeader>

            <AlertDialogBody>
              Please enter the card number '4242 4242 4242 4242' instead of your
              card details. Understood?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseCheckout}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={checkoutFn} ml={3}>
                I'm born ready!
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};

export default Cart;
