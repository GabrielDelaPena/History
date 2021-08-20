import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import WebShop from './components/WebShop';
import Contacts from './components/Contacts';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import { ProductsProvider } from './contexts/ProductsContexts'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProductsProvider>
            <Nav />
            <Route path="/" exact component={HomePage} />
            <Route path="/webshop" component={WebShop} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/product/:name" component={Product} />
            <Route path="/shoppingcart" component={ShoppingCart} />
          </ProductsProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
