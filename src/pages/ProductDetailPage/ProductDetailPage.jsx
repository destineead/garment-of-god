import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import * as productsAPI from '../../utilities/products-api';
import './ProductDetailPage.css';

export default function ProductDetailPage({ products }) {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(function() {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    async function getProductDetail() {
      const productDetail = await productsAPI.getProduct(productId);
      setSelectedProduct(productDetail)
    }
    getCart();
    getProductDetail()
  }, []);

  async function handleAddToCart(id) {
    const updatedCart = await ordersAPI.addToCart(id);
    setCart(updatedCart);
  }

  return (
    <div className="product-detail-container">
      <div className="product-images">
          {selectedProduct && selectedProduct.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
      </div>
      { selectedProduct && <div className="product-content">
      <h1 className="product-name">{selectedProduct.name}</h1>
        <p>{selectedProduct.sizesAvailable.join(' , ')}</p>
        <p>{selectedProduct.size}</p>
        <p>{selectedProduct.colorsAvailable.join(' , ')}</p>
        <p>{selectedProduct.color}</p>
        <p className="product-description">{selectedProduct.description}</p>
        <p className="product-price">{selectedProduct.price}</p>
      <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct._id)}>Add To Cart</button>
      <Link to="/cart" className="view-cart-btn" onClick={cart}>View Cart</Link>
      </div>}
    </div>
  );
}
