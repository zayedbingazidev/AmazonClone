import axios from 'axios';
import { CART_ADD_ITEM } from "./type/cartActionType";

export const addToCart = (productId, qty) => async(dispatch, getState) => {
      const {data} = await axios.get(`/api/products/${productId}`);
      dispatch({
            type: CART_ADD_ITEM,
            payload: {
                  name: data.name,
                  image: data.image,
                  price: data.price,
                  countInStock: data.countInStock,
                  product: data._id,
                  qty,

            }
      });
      localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) // get state is from redux thunk, .cart.cartItems check the store.js initial state
}