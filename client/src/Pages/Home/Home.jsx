import Banner from "../../Components/Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import Products from './../Products/Products';
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <Products headingText='Popular Products' />
        </div>
      </div>
    </div>
  );
};

export default Home;
