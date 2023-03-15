import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useLocation, useParams } from 'react-router-dom';
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import LottieAnimation from "../../Components/LottiesFile/LottieAnimation";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { getSingleProductFnApi } from "../../API/APICalls";
import { addToCartRequest, addToCartSuccess } from "../../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SingleProduct = () => {
  const dispacth = useDispatch()
  const [quantity, setquantity] = useState(1)
  const handleQuantity = (sign) =>{
    if(sign === '-'){
      setquantity((prev)=>prev-1)
    }else{
      setquantity((prev)=>prev+1)

    }
  }
  const {id} = useParams()
  const { pathname,location } = useLocation();
  const [product, setProduct] = useState(null);
  const {products,isLoading} = useSelector((store)=>store.products) || []
  const addToCartFn = useCallback(() => {
    let dummyProduct = {...product}
    dummyProduct.quantity = quantity
    dispacth(addToCartRequest())
    dispacth(addToCartSuccess(dummyProduct))
    setquantity(1)
    toast.success('Great pick! Added to your cart');
  }, [product, quantity, dispacth]);
  
  useEffect(() => {
    getSingleProductFnApi(id)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [location]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
        {
            !product?<LottieAnimation />:(
              <>
              <div className="left">
            <img src={product?.image?.url} alt="product image" />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price">₹{product?.price}</span>
            <span className="desc">{product?.des}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <Button isDisabled={quantity == 1} onClick={()=>{handleQuantity('-')}}>-</Button>
                <span>{quantity}</span>
                <Button onClick={()=>{handleQuantity('+')}}>+</Button>
              </div>
              <button className="add-to-cart-button" onClick={addToCartFn}>
                <FaCartPlus size={20} /> ADD TO CART
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: <span>{product?.category.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
              </>
            )
          }
          
        </div>
        {
          isLoading?<LottieAnimation />: <RelatedProducts productData={products} id={id} category={product?.category._id} />
        }
       
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default SingleProduct;
