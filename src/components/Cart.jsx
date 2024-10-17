import "./Cart.css";
import { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CartItem from "./CartItem";

const sampleData = {
  itemName: "Victoria",
  price: 50,
  amount: 1,
  imageUrl: "/img/victoria-240x240.webp",
  onAddToCart: () => console.log("Added to cart"),
};
const sampleData2 = {
  itemName: "Azulito",
  price: 100,
  amount: 1,
  imageUrl: "/img/azulito-240x240.webp",
  onAddToCart: () => console.log("Added to cart"),
};
const sampleData3 = {
  itemName: "Mojito",
  price: 100,
  amount: 1,
  imageUrl: "/img/mojito-240x240.webp",
  onAddToCart: () => console.log("Added to cart"),
};

function Cart({ onBack }) {
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
        />
        <CartItem
          itemName={sampleData.itemName}
          price={sampleData.price}
          amount={sampleData.amount}
          imageUrl={sampleData.imageUrl}
          onAddToCart={sampleData.onAddToCart}
        />
        <CartItem
          itemName={sampleData2.itemName}
          price={sampleData2.price}
          amount={sampleData2.amount}
          imageUrl={sampleData2.imageUrl}
          onAddToCart={sampleData2.onAddToCart}
        />
        <CartItem
          itemName={sampleData3.itemName}
          price={sampleData3.price}
          amount={sampleData3.amount}
          imageUrl={sampleData3.imageUrl}
          onAddToCart={sampleData3.onAddToCart}
        />

        <p className="cart-subtotal">Subtotal: $250</p>

        <div className="go-to-cart">
          <button className="go-to-cart-button back-button" onClick={onBack}>
            Atrás
          </button>
          <button
            className="go-to-cart-button payment-button"
            onClick={addToCart}
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
