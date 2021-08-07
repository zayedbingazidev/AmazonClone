import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import {productDetailsReducer, productListReducer} from './reducers/productReducers'
import thunk from 'redux-thunk';
const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetailsReducer
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