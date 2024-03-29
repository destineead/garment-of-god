import './ProductListItem.css';

export default function ProductListItem({ product }) {

  return (
    <div className="product-list-item">
      <img src={product.images[0]} alt="" id="product-list-item-img"/>
      <div className="product-list-content">
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    </div>
  )
}
