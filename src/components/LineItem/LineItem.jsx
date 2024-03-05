export default function LineItem({ lineItem, product }) {

  return (
      <div className="line-item-container">
        <div className="lineitem-img">
          <img src={product.images[0]} alt={lineItem.product.name} />
        </div>
        <div className="lineitem-content">
          <h3>{lineItem.product.name}</h3>
          <p>Price: ${lineItem.product.price}</p>
          <p>Description: {lineItem.product.description}</p>
          {lineItem.product.sizesAvailable && (
            <div>
              <p>Sizes Available:</p>
              <ul>
                {lineItem.product.sizesAvailable.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
            </div>
          )}
          {lineItem.product.colorsAvailable && (
            <div>
              <p>Colors Available:</p>
              <ul>
                {lineItem.product.colorsAvailable.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  