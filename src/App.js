import React from "react";
// React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// Styles
import "./App.css";

// Views
import Products from "./views/Products";
import Cart from "./views/Cart";
import Login from "./views/Login";
import Logout from "./views/Logout";
import Profile from "./views/Profile";

// Context
import { CartProvider } from "./context/CartContext";
import { WishProvider } from "./context/WishContext";

function App() {
  return (
    <CartProvider>
      <WishProvider>
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WishProvider>
    </CartProvider>
  );
}

export default App;
