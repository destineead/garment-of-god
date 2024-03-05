import ProductList from '../../components/ProductList/ProductList';
import './ShopPage.css'

export default function ShopPage({ products, user }) {

  return (
    <div className='shop-page'>
      <header className='header'>SHOP</header>
          <ProductList products={products} user={user} />
    </div>
  )
}
