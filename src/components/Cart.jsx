import "./Cart.css";
import { useContext } from "react";
import { Context } from "../App";
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
  const [totalCartItems, setTotalCartItems] = useContext(Context);

  const addToCart = () => {
    setTotalCartItems(totalCartItems + 1);
  };

  const removeFromCart = () => {
    setTotalCartItems(totalCartItems > 0 ? totalCartItems - 1 : 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="menu-container">
      <div className="menu-card">
        <Header
          scrollToTop={scrollToTop}
          cartItems={totalCartItems}
          title={"Carrito"}
        />
        <CartItem
          itemName={sampleData.itemName}
          price={sampleData.price}
          amount={sampleData.amount}
          imageUrl={sampleData.imageUrl}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
        <CartItem
          itemName={sampleData2.itemName}
          price={sampleData2.price}
          amount={sampleData2.amount}
          imageUrl={sampleData2.imageUrl}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
        />
        <CartItem
          itemName={sampleData3.itemName}
          price={sampleData3.price}
          amount={sampleData3.amount}
          imageUrl={sampleData3.imageUrl}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
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
