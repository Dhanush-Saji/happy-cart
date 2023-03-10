import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import {HashLink} from 'react-router-hash-link'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Cart from "../Cart/Cart";
import Search from '../../Components/Search/Search';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const Header = () => {
  const cartQnty = useSelector((store)=>store.cart.cartQuantity) || 0
  const navigate = useNavigate()
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart
  } = useDisclosure();
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch
  } = useDisclosure();

  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleCloseCart = () => {
    console.log("Closing cart");
    onCloseCart();
  };
  const navigateFn = () =>{
    navigate(`/`)
}
  const navigateFnHome = () =>{
    window.scrollTo(0, 0);
    navigate(`/`)
}
const navigateFnButton = () =>{
  navigate(`/product`)
}
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li  onClick={navigateFnHome}><HashLink smooth to="#home">Home</HashLink></li>
            <li><HashLink smooth to="#footer">About</HashLink></li>
            <li onClick={navigateFnButton}>Categories</li>
          </ul>
          <div className="center" onClick={navigateFn}>MyStore</div>
          <div className="right">
            <TbSearch onClick={onOpenSearch} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={onOpenCart}>
              <CgShoppingCart onClick={onOpenCart} />
              <span onClick={onOpenCart}>{cartQnty}</span>
            </span>
          </div>
        </div>
      </header>
      {/* //////////////Cart///////////// */}
     <Drawer
        isOpen={isOpenCart}
        placement='right'
        onClose={onCloseCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Cart />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* //////////////Cart///////////// */}

       {/* //////////////Search///////////// */}
     <Drawer size={'full'}
        isOpen={isOpenSearch}
        placement='bottom'
        onClose={onCloseSearch}
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* <DrawerCloseButton size={'xl'} w='lg' /> */}
          <DrawerBody>
            <Search onCloseSearch={onCloseSearch} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* //////////////Search///////////// */}
    </>
  );
};

export default Header;
