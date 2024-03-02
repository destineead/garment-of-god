import { useParams } from 'react-router-dom';

export default function ProductDetailPage({ products }) {
  const {productId} = useParams();
  const selectedProduct = products.find(p => p._id === productId);
  

  return (
    <div>
      <h1>Product Detail</h1>
      <div>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.sizesAvailable.join(', ')}</p>
        <p>{selectedProduct.size}</p>
        <p>{selectedProduct.colorsAvailable.join(', ')}</p>
        <p>{selectedProduct.color}</p>
      
        <p>{selectedProduct.description}</p>
        <p>{selectedProduct.category.name}</p>
        <p>{selectedProduct.price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  )
}