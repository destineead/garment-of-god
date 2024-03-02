import { Link } from 'react-router-dom';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.css'

export default function ProductList({ products }) {

  return (
    <div className='product-container'>
      {products.map((p) => (
        <Link to={`/products/${p._id}`}>
          <ProductListItem key={p._id} product={p}/>
        </Link>
      ))}
    </div>
  )
}