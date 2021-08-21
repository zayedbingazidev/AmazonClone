import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Amazona</Link>
          </div>
          <div>
            <Link to="/cart">Cart {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}</Link>
            <Link to="/signin">Sign In</Link>
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
