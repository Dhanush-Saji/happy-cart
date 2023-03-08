import "./Category.scss";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Category = ({categoryData}) => {
    const navigate = useNavigate()
    const navigateFn = (item) =>{
        navigate(`/product?category=${item.title}`)
    }
    
    return (
        <div className="shop-by-category">
            <div className="categories">
                {
                    categoryData.map((item,index)=>(
                        <div key={index} className="category" onClick={()=>{navigateFn(item)}}>
                    <img src={item.image.url} alt="" />
                </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Category;
