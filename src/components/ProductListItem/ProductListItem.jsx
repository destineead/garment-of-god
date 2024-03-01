export default function ProductListItem({product}) {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.images}</p>
    </div>
  )
}