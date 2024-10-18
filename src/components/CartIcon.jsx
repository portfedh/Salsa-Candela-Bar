import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";

const CartIcon = ({ cartCount }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FaShoppingCart size={28} />
      {cartCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px",
            fontSize: "12px",
            fontWeight: "700",
            width: "15px",
            height: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cartCount}
        </span>
      )}
    </div>
  );
};

CartIcon.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartIcon;
