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
            <Route path="/History/" exact component={HomePage} />
            <Route path="/History/webshop" component={WebShop} />
            <Route path="/History/contacts" component={Contacts} />
            <Route path="/History/product/:name" component={Product} />
            <Route path="/History/shoppingcart" component={ShoppingCart} />
          </ProductsProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
