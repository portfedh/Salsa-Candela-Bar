import "./Cart.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function Cart() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="menu-container">
      <div className="menu-card">
        <Header
          scrollToTop={scrollToTop}
          cartItems={cartItems}
          title={"Carrito"}
          icon={false}
        />
        <div className="go-to-cart">
          <button className="go-to-cart-button" onClick={addToCart}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Cart;
