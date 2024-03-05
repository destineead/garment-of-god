import { Link } from 'react-router-dom';
import ProductListItem from '../ProductListItem/ProductListItem';
import './ProductList.css'

export default function ProductList({ products, user }) {

  return (
    <div className='product-container'>
      {products.map((p) => (
        user ?
          <Link to={`/products/${p._id}`} key={p._id}>
            <ProductListItem key={p._id} product={p}/>
          </Link>
          :
          <ProductListItem key={p._id} product={p}/>
      ))}
    </div>
  )
}