import React from 'react'
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
// Styles
import './App.css';


// Vistas
import Products from "./views/Products";
import Cart from "./views/Cart"
import Login from "./views/Login"
import Logout  from "./views/Logout"
import Profile from "./views/Profile"


// Context
import { CartProvider } from './context/CartContext';
import { WishProvider } from './context/WishContext'

function App() {
  return (
    <CartProvider>
    <WishProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={ Products } />
            <Route path='/cart' exact component={ Cart } />
            <Route path='/category/:id' component={ ItemListContainer } />
            <Route path='/product/:id' component={ ItemDetailContainer } />
            <Route path='/login' exact component={ Login }/>
            <Route path='/logout' exact component={ Logout }/>
            <Route path='/profile' exact component={ Profile }/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </WishProvider>
    </CartProvider>
  );
}

export default App;
