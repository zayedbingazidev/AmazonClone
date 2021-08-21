import React, { useEffect } from 'react'
import { addToCart } from '../redux/action/cartAction';
import { useDispatch } from 'react-redux'

export default function CartScreen(props) {
      const productId = props.match.params.id;
      const qty = props.location.search? Number(props.location.search.split('=')[1]): 1
      const dispatch = useDispatch()
      useEffect(() => {
            if(productId) {
                  dispatch(addToCart(productId, qty));
            }
      }, [dispatch, productId , qty]) // You should include in the brackets all the variables in the productId
      return (
            <div>
                  <h1>Cart Screen</h1>
                  <p>ADD To CART: Product Id: {productId}: Qty: {qty}</p>
            </div>
      )
}
