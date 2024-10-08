import "./Menu.css";
import { useState } from "react";
import CartIcon from "./CartIcon";
import PropTypes from "prop-types";

function Menu() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="header">
          <div className="logo">
            <img
              className="logo-image"
              src="favicon.png"
              alt="Salsa Candela Logo"
            />
          </div>
          <h1 className="menu-heading">Menu</h1>
          <CartIcon cartCount={cartItems} />
        </div>

        <button className="category-button" onClick={addToCart}>
          Agua $20
        </button>

        <button className="category-button">Jugos $30</button>

        <button className="category-button">Refresco $30</button>

        <button className="category-button">Cerveza $50</button>

        <button className="category-button">Cócteles $100</button>

        <button className="category-button">Mocteles $50</button>

        <button className="category-button">Botanas $20</button>

        <div className="menu-content">
          <div className="menu-section">
            <h2 className="menu-title">Agua</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Jugos</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Refresco</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Cerveza</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Cócteles</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Mocteles</h2>
          </div>

          <div className="menu-section">
            <h2 className="menu-title">Botanas</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Menu;
