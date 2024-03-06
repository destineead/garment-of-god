import LineItem from '../../components/LineItem/LineItem';
import './CartPage.css'

export default function CartPage({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(lineItem =>
    <LineItem
      lineItem={lineItem}
      key={lineItem._id}
      handleChangeQty={handleChangeQty}
    />
  );
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="line-item-container">
     {lineItems}
     <button onClick={handleCheckout} disabled={!lineItems.length}>Checkout</button>
     </div>
    </div>
  );
} 
