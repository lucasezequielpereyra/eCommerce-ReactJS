import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

// Vistas
import Products from "./views/Products";
import Contact from "./views/Contact";
import About from "./views/About";
import Cart from "./views/Cart"

// Context
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path='/category/:id' component={ItemListContainer} />
            <Route path='/product/:id' component={ItemDetailContainer} />
            <Route path='/cart' exact component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
