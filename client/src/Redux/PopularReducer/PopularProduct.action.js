import {
  GET_POPULAR_PRODUCT_ERROR,
  GET_POPULAR_PRODUCT_REQUEST,
  GET_POPULAR_PRODUCT_SUCCESS,
} from "./PopularProduct.actionType";

export const getPopularProductSuccess = (payload) => {
  return {
    type: GET_POPULAR_PRODUCT_SUCCESS,
    payload,
  };
};

export const getPopularProductError = () => {
  return {
    type: GET_POPULAR_PRODUCT_ERROR,
  };
};

export const getPopularProductRequest = () => {
  return {
    type: GET_POPULAR_PRODUCT_REQUEST,
  };
};
