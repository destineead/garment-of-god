import './LineItem.css'
export default function LineItem({lineItem, handleChangeQty}) {
  return (
    <div className="lineItem">
      <div>{lineItem.product.name}</div>
      <div>
        <span>Color: {lineItem.product.color}</span>
        <span>Size: {lineItem.product.size}</span>
        <span>{lineItem.product.price.toFixed(2)}</span>
      </div>
      <div>
          <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>
            −
          </button>&nbsp;&nbsp;
        <span>{lineItem.qty}</span>
          <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>
            +
          </button>
      </div>
      <div>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}