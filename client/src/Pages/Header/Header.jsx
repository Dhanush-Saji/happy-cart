import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { cleanPersistedData } from "../../Redux/store";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import Cart from "../Cart/Cart";
import Search from "../../Components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { pathname } = useLocation();
  const cartQnty = useSelector((store) => store.cart.cartQuantity) || 0;
  const userData = useSelector((store) => store.user.user);
  const navigate = useNavigate();
  const {
    isOpen: isOpenCart,
    onOpen: onOpenCart,
    onClose: onCloseCart,
  } = useDisclosure();
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
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
    onCloseCart();
  };
  const navigateFn = () => {
    navigate(`/`);
  };
  const navigateFnHome = () => {
    window.scrollTo(0, 0);
    navigate(`/`);
  };
  const navigateFnButton = () => {
    navigate(`/product`);
  };
  const signinFn = () => {
    let data = {
      pathname,
    };
    navigate(`/login`, { state: data });
  };
  const signout = () => {
    cleanPersistedData();
    window.location.reload();
  };
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={navigateFnHome}>
              <HashLink smooth to="#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#footer">
                About
              </HashLink>
            </li>
            <li onClick={navigateFnButton}>Categories</li>
          </ul>
          <div className="center" onClick={navigateFn}>
            HappyCart
          </div>
          <div className="right">
            <div>
              <Menu style={{ color: "black", zIndex: "150" }}>
                <MenuButton
                  as={Button}
                  style={{ color: "black", zIndex: "150" }}
                >
                  <FiUser />
                </MenuButton>
                {userData ? (
                  <MenuList style={{ color: "black", zIndex: "150" }}>
                    <MenuItem
                      style={{ color: "black", zIndex: "150" }}
                      onClick={() => {
                        navigate("/myorders");
                      }}
                    >
                      My Orders
                    </MenuItem>
                    <MenuItem
                      style={{ color: "black", zIndex: "150" }}
                      onClick={signout}
                    >
                      Sign Out
                    </MenuItem>
                  </MenuList>
                ) : (
                  <MenuList style={{ color: "black", zIndex: "150" }}>
                    <MenuItem style={{ color: "black", zIndex: "150" }} onClick={signinFn}>Sign In</MenuItem>
                  </MenuList>
                )}
              </Menu>
            </div>
            <TbSearch onClick={onOpenSearch} />
            {/* <AiOutlineHeart /> */}
            <span className="cart-icon" onClick={onOpenCart}>
              <CgShoppingCart onClick={onOpenCart} />
              <span onClick={onOpenCart}>{cartQnty}</span>
            </span>
          </div>
        </div>
      </header>
      {/* //////////////Cart///////////// */}
      <Drawer isOpen={isOpenCart} placement="right" onClose={onCloseCart}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Cart handleCloseCart={handleCloseCart} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* //////////////Cart///////////// */}

      {/* //////////////Search///////////// */}
      <Drawer
      size={{base:'lg'}}
        isOpen={isOpenSearch}
        placement="left"
        onClose={onCloseSearch}
      >
        <DrawerOverlay />
        <DrawerContent>
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
