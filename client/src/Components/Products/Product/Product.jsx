import "./Product.scss";
import { useNavigate } from "react-router";
const Product = ({item}) => {
    const navigate = useNavigate()
    const navigateToSingle = () =>{
        navigate(`/singleproduct/${item._id}`)
    }
    return (
        <div className="product-card" onClick={navigateToSingle}>
            <div className="thumbnail">
                <img src={item.image.url} alt="product image" />
            </div>
            <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.des}</span>
                <span className="price">₹{item.price}</span>
            </div>
        </div>
    )
};

export default Product;
