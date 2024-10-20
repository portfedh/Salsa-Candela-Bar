import "./styles/Cart.css";
import { useContext } from "react";
import { Context } from "../App";
import Header from "./Header";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import { useNavigate } from "react-router-dom";
import { usePromotions } from "../hooks/usePromotions";

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
        item.drinkId === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const subtractFromCart = (id) => {
    console.log("Removing item with id:", id);
    const item = cartItems.find((item) => item.drinkId === id);
    console.log("Item found:", item);
    if (item.quantity > 1) {
      setTotalCartItems(totalCartItems - 1);
      setCartItems(
        cartItems.map((item) =>
          item.drinkId === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setTotalCartItems(totalCartItems - 1);
      setCartItems(cartItems.filter((item) => item.drinkId !== id));
    }
    console.log("Updated cart items:", cartItems);
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.drinkId === id);
    setTotalCartItems(totalCartItems - item.quantity);
    setCartItems(cartItems.filter((item) => item.drinkId !== id));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.unitPrice * item.quantity,
      0
    );
  };

  const appliedDiscounts = usePromotions({ items: cartItems });

  const totalDiscount = appliedDiscounts.reduce(
    (acc, discount) => acc + discount.amount,
    0
  );

  const total = calculateSubtotal() - totalDiscount;

  return (
    <div className="menu-container">
      <div className="menu-card">
        <Header
          scrollToTop={scrollToTop}
          cartItems={totalCartItems}
          title={"Carrito"}
        />
        <div className="cart-promotions-section">
          <p>Promociones Cervezas:</p>
          <div className="cart-promotions-card">
            <button className="cart-promotion-button"> 1 x $50</button>
            <button className="cart-promotion-button"> 2 x $90</button>
            <button className="cart-promotion-button"> 3 x $120</button>
          </div>

          <p>Promociones Cocteles:</p>
          <div className="cart-promotions-card">
            <button className="cart-promotion-button"> 1 x $100</button>
            <button className="cart-promotion-button"> 2 x $180</button>
          </div>
        </div>

        {cartItems.map((item) => (
          <CartItem
            key={item.drinkId}
            itemName={item.itemName}
            unitPrice={item.unitPrice}
            amount={item.quantity}
            imageUrl={item.imageUrl}
            onAddToCart={() => addToCart(item.drinkId)}
            onSubtractFromCart={() => subtractFromCart(item.drinkId)}
            onRemoveFromCart={() => removeFromCart(item.drinkId)}
          />
        ))}
        <p className="cart-subtotal">Subtotal: ${calculateSubtotal()}</p>
        <p className="cart-discount">Descuento: ${totalDiscount}</p>
        <p className="cart-total">Total: ${total}</p>
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
