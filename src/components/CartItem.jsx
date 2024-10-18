import PropTypes from "prop-types";
import "./CartItem.css";

const MenuItem = ({
  itemName,
  price,
  amount,
  imageUrl,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="cart-menu-item">
      <div className="cart-menu-image">
        <img src={imageUrl} alt={itemName} />
      </div>
      <div className="cart-menu-details">
        <p>{itemName}</p>
        <p>${price}</p>

        <div className="cart-menu-controls">
          <button onClick={onRemoveFromCart}>-</button>
          <p>{amount}</p>
          <button onClick={onAddToCart}>+</button>
        </div>

        <button className="cart-menu-remove">Eliminar</button>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  itemName: PropTypes.func.isRequired,
  price: PropTypes.func.isRequired,
  amount: PropTypes.func.isRequired,
  imageUrl: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default MenuItem;
