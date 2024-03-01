import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList({ products }) {
  return (
  <div>
    {products.map((p, idx) => (
      <ProductListItem product={p} key={idx} />
    ))}
  </div>
  )
}