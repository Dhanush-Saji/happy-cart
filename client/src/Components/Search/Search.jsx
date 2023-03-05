import { Input } from "@chakra-ui/react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod from "../../assets/products/earbuds-prod-3.webp";
const Search = ({ onCloseSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <Input autoFocus placeholder="Search for products" />
        <MdClose className="close-btn" onClick={onCloseSearch} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={prod} />
            </div>
            <div className="prod-details">
              <span className="name">Product title</span>
              <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut, in consectetur omnis ullam tenetur ex ducimus aliquam illo aperiam quidem ipsam ipsum facere, itaque voluptatem. Cumque repudiandae dolorum explicabo?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
