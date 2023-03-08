
import { GET_POPULAR_PRODUCT_ERROR, GET_POPULAR_PRODUCT_REQUEST, GET_POPULAR_PRODUCT_SUCCESS } from './PopularProduct.actionType';

const initialValue = {
  popularProductData: [],
  isLoading: false,
  isError: false,
};
export const popularProductReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case GET_POPULAR_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, popularProductData: payload };
    }
    case GET_POPULAR_PRODUCT_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_POPULAR_PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    default: {
      return state;
    }
  }
};
