import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

// Vistas
import Products from "./views/Products";
import Contact from "./views/Contact";
import About from "./views/About";

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path='/category/:id' component={ItemListContainer} />
          <Route path='/product/:id' component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
