import Banner from "../../Components/Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useLayoutEffect } from "react";
import Products from './../../Components/Products/Products';
import { useLocation } from 'react-router-dom';
import { getCategoryItems, getPopularItems, getProducts } from "../../API/APICalls";

const Home = () => {
  const dispatch = useDispatch()
  const categoryData = useSelector((store)=>store.category.categoryItems) || []
  const productData = useSelector((store)=>store.popularItems.popularItemsArray) || []
  useEffect(()=>{
    dispatch(getCategoryItems())
    dispatch(getPopularItems())
    dispatch(getProducts())
  },[])
  return (
    <div id='#home'>
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
