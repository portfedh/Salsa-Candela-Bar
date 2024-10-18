import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import "./styles/CartIcon.css";

const CartIcon = ({ cartCount }) => {
  return (
    <div className="cart-icon-container">
      <FaShoppingCart size={28} />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
};

CartIcon.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartIcon;
