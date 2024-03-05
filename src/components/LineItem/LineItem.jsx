export default function LineItem({lineItem, handleChangeQty}) {

  return (
    <div className="LineItem">
      <div>{lineItem.product.name}</div>
      <div>
        <span>{lineItem.product.description}</span>
        <span>{lineItem.product.price.toFixed(2)}</span>
      </div>
      <div>
          <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>
            −
          </button>
        <span>{lineItem.qty}</span>
          <button onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>
            +
          </button>
      </div>
      <div>${lineItem.extPrice.toFixed(2)}</div>
    </div>
  );
}