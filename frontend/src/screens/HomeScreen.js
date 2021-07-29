import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
      const [products, setProducts] = useState([]);
      const [loading, setloading] = useState(false);
      const [error, seterror] = useState(false)
      useEffect(() => {
            const fethcData = async () => {
                  try {
                        setloading(true);
                        const { data } = await axios.get('/api/products');
                        setloading(false);
                        setProducts(data);
                  } catch (err) {
                        seterror(err.message);
                        setloading(false);
                  }
            }
            fethcData()
      }, []) 
      {/* [] will run this function only once */}
      return (
            <div>
                  {loading? (<LoadingBox/>):error?(<MessageBox variant="danger">{error}</MessageBox>):(
                              <div className="row center">
                              {
                                    products.map((product) => {
                                          return (
                                                      <Product key={product._id} product={product}/>
                                                )
                                          }
                                    )
                              }
                        </div>
                        )
                  }
                  
            </div>
      )
}
