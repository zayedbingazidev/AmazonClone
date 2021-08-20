import Product from './components/Product'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <BrowserRouter>
    
    
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">Amazona</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route> {/* the question mark is used after the id is becasue if the user goes in to the cart page directly then no items will be added to the cart and this achived through the split fuction in the CartScreen Page  */}
          <Route path="/product/:id" component={ProductScreen}></Route>  {/* no need to put exact here */}
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">
              All Rights Reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
