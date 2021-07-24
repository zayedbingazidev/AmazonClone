import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

export default function HomeScreen() {
      const [products, setProducts] = useState([])
      useEffect(() => {
            const fethcData = async () => {
                  const { data } = await axios.get('/api/products');
                  setProducts(data);
            }
            fethcData()
      }, []) 
      {/* [] will run this function only once */}
      return (
            <div>
                  <div className="row center">
                        {
                              products.map((product) => {
                              return (
                              <Product key={product._id} product={product}/>
                              )
                              })
                        }
                  </div>
            </div>
      )
}
