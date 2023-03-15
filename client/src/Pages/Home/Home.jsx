import Banner from "../../Components/Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Products from "./../../Components/Products/Products";
import {
  getCategoryItems,
  getPopularItems,
  getProducts,
} from "../../API/APICalls";
import LottieAnimation from "../../Components/LottiesFile/LottieAnimation";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryItems, isLoading: categoryLoading } = useSelector(({ category }) => category || {});
  const { popularItemsArray, isLoading: popularLoading } = useSelector(({ popularItems }) => popularItems || {});
  let check = popularLoading + categoryLoading;
  useEffect(() => {
    dispatch(getCategoryItems());
    dispatch(getPopularItems());
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Banner />
      <div className="main-content">
        {check ? (
          <LottieAnimation />
        ) : (
          <div className="layout">
            <Category categoryData={categoryItems} />
            <div className="popular-title">Popular Products</div>
            <Products productData={popularItemsArray} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
