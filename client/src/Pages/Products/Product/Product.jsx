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
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, in consectetur omnis ullam tenetur ex ducimus aliquam illo aperiam quidem ipsam ipsum facere, itaque voluptatem. Cumque repudiandae dolorum explicabo?</span>
                <span className="price">₹499</span>
            </div>
        </div>
    )
};

export default Product;
