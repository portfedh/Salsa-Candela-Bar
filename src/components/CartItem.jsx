import PropTypes from "prop-types";
import "./styles/CartItem.css";

const CartItem = ({
  itemName,
  price,
  amount,
  imageUrl,
  onAddToCart,
  onSubtractFromCart,
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
          <button onClick={onSubtractFromCart}>-</button>
          <p>{amount}</p>
          <button onClick={onAddToCart}>+</button>
        </div>

        <button className="cart-menu-remove" onClick={onRemoveFromCart}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onSubtractFromCart: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
};

export default CartItem;
