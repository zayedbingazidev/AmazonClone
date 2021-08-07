import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailProduct } from '../redux/action/productAction';

export default function ProductScreen(props) {
      const product_id = props.match.params.id 
      const productDetails = useSelector( state => state.productDetails);
      const {loading, error, product} = productDetails;

      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(detailProduct(product_id))
            console.log(product)
      }, [dispatch, product_id])
      return (
            <div>
                  {loading? (<LoadingBox/>):error?(<MessageBox variant="danger">{error}</MessageBox>):(
                         <div>
                         <Link to="/">Back to results</Link>
                         <div className="row top">
                               <div className="col-2">
                                     <img className="large" src={product.image} alt={product.name}/>
                               </div>
                               <div className="col-1">
                                     <ul>
                                           <li>
                                                 <h1>{product.name}</h1>
                                           </li>
                                           <li>
                                                 <Rating rating={product.rating} numReviews={product.numReviews}/>
                                           </li>
                                           <li>
                                                 Price : ${product.price}
                                           </li>
                                           <li>
                                                 Description: 
                                                 <p>{product.description}</p>
                                           </li>
                                     </ul>
                               </div>
                               <div className="col-1">
                                     <div className="card card-body">
                                           <ul>
                                                 <li>
                                                       <div className="row">
                                                             <div>Price</div>
                                                             <div className="price">${product.price}</div>
                                                       </div>
                                                 </li>
                                                 <li>
                                                       <div className="row">
                                                             <div>Status</div>
                                                             <div>&nbsp;
                                                                   {
                                                                         product.countInStock>0?
                                                                         <span className="success">In Stock</span>
                                                                         :<span className="danger">Unavailable</span>
                                                                   }
                                                             </div>
                                                       </div>
                                                 </li>
                                                 <li>
                                                       <button className="primary block">
                                                             Add to Cart
                                                       </button>
                                                 </li>
                                           </ul>
                                     </div>
                                     
                               </div>
                         </div>
                   </div>
                   
                        )
                  }
                  
            </div>
           )
}
