import ProductList from '../../components/ProductList/ProductList'

export default function ShopPage({ products, categories}) {

  return (
    <div>
      <h2>Shop</h2>
        <div className='product-list'>
          <ProductList products={products}/>
        </div>
    </div>
  )
}
