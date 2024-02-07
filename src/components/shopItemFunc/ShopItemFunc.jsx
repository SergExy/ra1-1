import PropTypes from 'prop-types';

const ShopItemFunc = ({ item }) => {
  const {
    brand,
    title,
    description,
    descriptionFull,
    price,
    currency,
  } = item;

  let validPrice;
  const priceParts = price.toString().split('.');

  if (priceParts.length < 2) {
    validPrice = price + '.00';
  } else {
    validPrice = priceParts[0] + '.' + priceParts[1].toString().padEnd(2, '0');
  }

  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">
        {descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{currency + validPrice}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

ShopItemFunc.propTypes = {
  item: PropTypes.object,
};

export default ShopItemFunc;