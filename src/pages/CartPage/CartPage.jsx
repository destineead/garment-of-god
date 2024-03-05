import LineItem from '../../components/LineItem/LineItem';

export default function CartPage({ order }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(lineItem =>
    <LineItem
      lineItem={lineItem}
      key={lineItem._id}
    />
  );
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
     {lineItems}
    </div>
  );
} 
