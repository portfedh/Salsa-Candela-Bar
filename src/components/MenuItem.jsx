import PropTypes from "prop-types";
import "./MenuItem.css";

const MenuItem = ({ itemName, price, amount, imageUrl, onAddToCart }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={itemName} />
      <p>{itemName}</p>
      <p>${price}</p>
      <p>{amount}</p>
      <button onClick={onAddToCart}>+</button>
    </div>
  );
};

MenuItem.propTypes = {
  itemName: PropTypes.func.isRequired,
  price: PropTypes.func.isRequired,
  amount: PropTypes.func.isRequired,
  imageUrl: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MenuItem;
