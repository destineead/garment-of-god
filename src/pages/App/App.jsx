import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import ProductDetailPage from '../../pages/ProductDetailPage/ProductDetailPage';
import CartPage from '../../pages/CartPage/CartPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);

  useEffect(function() {
    async function getProducts() {
      const allProducts = await productsAPI.getAll();
      setProducts(allProducts);
    }
    getProducts();
  }, []);
  
  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    if (user) {
      getCart();
    } else {
      setCart(null);
    }
  }, [user]);

  return (
    <main className="App">
      <NavBar user={user} order={cart} setUser={setUser} />
      { user ? (
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products} user={user} />} />
          <Route path="/products/:productId" element={<ProductDetailPage products={products} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage order={cart} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      ):(
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products} user={user} />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </main>
  );
}
