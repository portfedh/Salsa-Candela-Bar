import "./styles/Cart.css";
import { useContext } from "react";
import { Context } from "../App";
import Header from "./Header";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/menu");
  };

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

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setTotalCartItems(totalCartItems - item.quantity);
    setCartItems(cartItems.filter((item) => item.id !== id));
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
            onRemoveFromCart={() => removeFromCart(item.id)}
          />
        ))}
        <p className="cart-subtotal">Subtotal: ${calculateSubtotal()}</p>
        <div className="go-to-cart">
          <button
            className="go-to-cart-button back-button"
            onClick={handleBack}
          >
            Atrás
          </button>
          <CheckoutButton cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
