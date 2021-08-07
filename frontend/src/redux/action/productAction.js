import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./type/productActionType"

export const listProducts = () => async(dispatch) => {
      dispatch({
            type: PRODUCT_LIST_REQUEST
      })
      try {
            const { data } = await axios.get('/api/products');
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
      } catch (error) {
            dispatch({type: PRODUCT_LIST_FAIL})
      }
}

export const detailProduct = (product_id) => async (dispatch) => {
      dispatch({type: PRODUCT_DETAILS_REQUEST, payload: product_id});
      try {
           const { data } = await axios.get(`/api/products/${product_id}`);
           dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
      } catch (error) {
            dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message: error.message})
      }
}