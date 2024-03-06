import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './ProductDetailPage.css';

export default function ProductDetailPage({ products, setCart }) {
  const { productId } = useParams();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  if (!products.length) return (null);
  const selectedProduct = products.find(p => p._id === productId);

  async function handleAddToCart(id) {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color before adding to cart.');
      return;
    }
    const updatedCart = await ordersAPI.addToCart(id, selectedSize, selectedColor);
    setCart(updatedCart);
  }

  return (
    <div className="product-detail-container">
      <div className="product-images-container">
        <div className="product-images">
          {selectedProduct.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      </div>
      <div className="product-content">
        <h1 className="product-name">{selectedProduct.name}</h1>
        <div className="product-options">
          <div className="size-options">
            <p>Select Size:</p>
            {selectedProduct.sizesAvailable.map((size, index) => (
              <button 
                name="size"
                value={selectedSize}
                key={index} 
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="color-options">
            <p>Select Color:</p>
            {selectedProduct.colorsAvailable.map((color, index) => (
              <button 
                key={index} 
                className={selectedColor === color ? "selected" : ""}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
        <p className="product-description"><b>Description</b>: {selectedProduct.description}</p>
        <p className="product-price">{selectedProduct.price}</p>
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct._id)}>Add To Cart</button>
      </div>
    </div>
  );
}
