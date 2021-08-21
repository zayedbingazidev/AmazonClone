import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
const initialState = {
      cart: {
            cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]
      }
};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetailsReducer,
      cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // this is only to make use of the chorme developer tools
// const reducer = (state = initialState, action) => {
//       const newState= {
//             products: data.products
//       }
//       return newState
// }

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk))); // the third permitar is for the redux thunk
export default store;