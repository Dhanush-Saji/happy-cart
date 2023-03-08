import "./SingleProduct.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import prod from "../../assets/products/watch-prod-1.webp";
import RelatedProducts from './RelatedProducts/RelatedProducts';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSingleProductFnApi } from "../../API/APICalls";
import { useEffect, useLayoutEffect, useState } from "react";
import LottieAnimation from "../../Components/LottiesFile/LottieAnimation";
import { useSelector } from "react-redux";
const SingleProduct = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const { pathname,location } = useLocation();
  const [product, setProduct] = useState(null);
  const {productData,isLoading} = useSelector((store)=>store.productReducer)

  useEffect(() => {
    getSingleProductFnApi(id)
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
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
            <img src={product?.image.url} alt="product image" />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price">₹{product?.price}</span>
            <span className="desc">{product?.des}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
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
          isLoading?<LottieAnimation />: <RelatedProducts productData={productData} id={id} category={product?.category._id} />
        }
       
      </div>
    </div>
  );
};

export default SingleProduct;
