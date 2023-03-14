import Product from "../../../Components/Products/Product/Product";
import './RelatedProducts.scss'

const RelatedProducts = ({productData,category,id}) => {
    const headphoneProducts = productData?.filter(
        (item) => item.category == category && item._id != id
      );
      const relatedProducts = headphoneProducts?.slice(0, 4).map((item, index) => (
        <Product key={index} item={item} />
      ));
    return (
        <>
        <div className="related-products">
        <div className="related-title">
                    Related Products
          </div>
          <div className="related-content">
            {relatedProducts}
          </div>
            </div>;
        </>
    )
};

export default RelatedProducts;
