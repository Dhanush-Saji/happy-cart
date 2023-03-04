import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'
const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="product image" />
            </div>
            <div className="prod-details">
                <span className="name">Product Name</span>
                <span className="price">₹499</span>
            </div>
        </div>
    )
};

export default Product;
