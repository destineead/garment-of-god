import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as productsAPI from '../../utilities/products-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CartPage from '../CartPage/CartPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setProducts(products);
    }
    getProducts();
  },[]);

  return (
    <main className="App">
      <NavBar user={user} />
      { user ? (
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      ):(
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
