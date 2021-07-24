import Product from './components/Product'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
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
