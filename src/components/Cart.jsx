import "./Cart.css";
import { useContext } from "react";
import { Context } from "../App";
import PropTypes from "prop-types";
import Header from "./Header";
import CartItem from "./CartItem";

function Cart({ onBack }) {
  const [totalCartItems, setTotalCartItems, cartItems, setCartItems] =
    useContext(Context);

  const addToCart = (id) => {
    setTotalCartItems(totalCartItems + 1);
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const subtractFromCart = (id) => {
    console.log("Removing item with id:", id);
    const item = cartItems.find((item) => item.id === id);
    console.log("Item found:", item);
    if (item.quantity > 1) {
      setTotalCartItems(totalCartItems - 1);
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setTotalCartItems(totalCartItems - 1);
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
    console.log("Updated cart items:", cartItems);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="menu-container">
      <div className="menu-card">
        <Header
          scrollToTop={scrollToTop}
          cartItems={totalCartItems}
          title={"Carrito"}
        />
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            itemName={item.itemName}
            price={item.price}
            amount={item.quantity}
            imageUrl={item.imageUrl}
            onAddToCart={() => addToCart(item.id)}
            onSubtractFromCart={() => subtractFromCart(item.id)}
          />
        ))}
        <p className="cart-subtotal">Subtotal: ${calculateSubtotal()}</p>
        <div className="go-to-cart">
          <button className="go-to-cart-button back-button" onClick={onBack}>
            Atrás
          </button>
          <button
            className="go-to-cart-button payment-button"
            onClick={() => alert("Proceed to payment")}
          >
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default Cart;
