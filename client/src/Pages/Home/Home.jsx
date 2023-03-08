import Banner from "../../Components/Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryFnApi, getPopularProductFnApi } from "../../API/APICalls";
import { useEffect, useLayoutEffect } from "react";
import Products from './../../Components/Products/Products';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const categoryData = useSelector((store)=>store.categoryReducer.categoryData)
  const productData = useSelector((store)=>store.popularProductReducer.popularProductData)
  useEffect(()=>{
    dispatch(getCategoryFnApi())
    dispatch(getPopularProductFnApi())

  },[])
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categoryData={categoryData} />
          <div className="popular-title">
                    Popular Products
          </div>
          <Products productData={productData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
