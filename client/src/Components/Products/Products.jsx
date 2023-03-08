import "./Products.scss";
import Product from './Product/Product';
import { useNavigate } from "react-router";
const Products = ({productData}) => {
    const navigate = useNavigate()
    const navigateFn = (item) =>{
        navigate(`/product?category=${item.title}`)
    }
    return (
        <div className="products-container">
            <div className="products">
            {
                productData.map((item,index)=>(

                    <Product key={index} item={item} onClick={()=>navigateFn(item)} />
                ))
            }
            </div>
        </div>
    )
};

export default Products;
