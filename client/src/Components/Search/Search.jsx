import { Input } from "@chakra-ui/react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Search = ({ onCloseSearch }) => {
  const navigate = useNavigate();
  const [searchData, setsearchData] = useState([]);
  const [text, settext] = useState("");

  const handleSearch = (e) => {
    settext(e.target.value);
  };

  const getSearchProductFnApi = async () => {
    if (!text) {
      setsearchData([]);
      return;
    }
    let params = {};
    params.title = text;
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_BACKENDAPI}product/find`,
        { params }
      );
      setsearchData(response.data);
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const navigateToSingle = (id) => {
    onCloseSearch();
    navigate(`/singleproduct/${id}`);
    window.location.reload();
  };
  useEffect(() => {
    let id = setTimeout(() => {
      getSearchProductFnApi();
    }, 1000);
    return () => clearTimeout(id);
  }, [text]);
  return (
    <div className="search-modal">
      <div className="form-field">
        <Input
          variant="outline"
          value={text}
          autoFocus
          placeholder="Search for products"
          onChange={handleSearch}
          border="1px solid black"
        />
        <MdClose className="close-btn" onClick={onCloseSearch} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {searchData.map((item, id) => (
            <div
              className="search-result-item"
              key={id}
              onClick={() => {
                navigateToSingle(item._id);
              }}
            >
              <div className="image-container">
                <img src={item.image.url} />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.des}</span>
              </div>
            </div>
          ))}
          {searchData.length === 0 ? (
            <div className="empty-cart">
              <span>No products...</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;
