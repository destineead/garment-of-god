import { useState, useEffect } from 'react';
import * as productsAPI from '../../utilities/products-api';

export default function ShopPage() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(function() {
    async function getProducts() {
      const products = await productsAPI.getAll();
      setMenuItems(products);
    }
    getProducts();
  },[]);

  
  return (
    <div>
      <h2>Shop</h2>
    </div>
  );
};
