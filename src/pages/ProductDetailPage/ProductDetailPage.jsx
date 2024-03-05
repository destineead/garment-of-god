import { useParams, Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import './ProductDetailPage.css';

export default function ProductDetailPage({ products, setCart }) {
  const { productId } = useParams();

  if (!products.length) return(null);
  const selectedProduct = products.find(p => p._id === productId);


  async function handleAddToCart(id) {
    const updatedCart = await ordersAPI.addToCart(id);
    setCart(updatedCart);
  }

  return (
    <div className="product-detail-container">
      <div className="product-images">
          {selectedProduct.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
      </div>
      <div className="product-content">
        <h1 className="product-name">{selectedProduct.name}</h1>
        <p>{selectedProduct.sizesAvailable.join(' , ')}</p>
        <p>{selectedProduct.size}</p>
        <p>{selectedProduct.colorsAvailable.join(' , ')}</p>
        <p>{selectedProduct.color}</p>
        <p className="product-description">{selectedProduct.description}</p>
        <p className="product-price">{selectedProduct.price}</p>
        <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedProduct._id)}>Add To Cart</button>
        <Link to="/cart" className="view-cart-btn">View Cart</Link>
      </div>
    </div>
  );
}
