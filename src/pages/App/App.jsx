import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  },[]);

  return (
    <main className="App">
      <NavBar user={user} />
      { user ? (
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />
          <Route path="/cart" element={<CartPage products={products} cart={cart} />} />
        </Routes>
      ):(
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/cart" element={<CartPage products={products} cart={cart} />} />
        </Routes>
      )}
    </main>
  );
}
