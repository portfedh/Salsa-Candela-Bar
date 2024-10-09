import "./Menu.css";
import { useState } from "react";
import CartIcon from "./CartIcon";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const menuData = {
  agua: [
    {
      itemName: "Agua",
      price: 20,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Agua Mineral",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  jugo: [],
  refresco: [],
  cerveza: [],
};

function Menu() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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

        <button
          className="category-button"
          onClick={() => scrollToSection("agua-section")}
        >
          Agua $20
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("jugo-section")}
        >
          Jugos $30
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("refresco-section")}
        >
          Refresco $30
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("cerveza-section")}
        >
          Cerveza $50
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("cocteles-section")}
        >
          Cócteles $100
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("mocteles-section")}
        >
          Mocteles $50
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("botanas-section")}
        >
          Botanas $20
        </button>

        <div className="menu-content">
          <div className="menu-section">
            <h2 id="agua-section" className="menu-title">
              Agua
            </h2>
            <div className="menu-items">
              <MenuItem
                itemName="Agua"
                price={20}
                imageUrl="https://via.placeholder.com/120"
                onAddToCart={addToCart}
              />
              <MenuItem
                itemName="Agua Mineral"
                price={30}
                imageUrl="https://via.placeholder.com/120"
                onAddToCart={addToCart}
              />
            </div>
          </div>

          <div className="menu-section">
            <h2 id="jugo-section" className="menu-title">
              Jugo
            </h2>
          </div>

          <div className="menu-section">
            <h2 id="refresco-section" className="menu-title">
              Refresco
            </h2>
          </div>

          <div className="menu-section">
            <h2 id="cerveza-section" className="menu-title">
              Cerveza
            </h2>
          </div>

          <div className="menu-section">
            <h2 id="cocteles-section" className="menu-title">
              Cócteles
            </h2>
          </div>

          <div className="menu-section">
            <h2 id="mocteles-section" className="menu-title">
              Mocteles
            </h2>
          </div>

          <div className="menu-section">
            <h2 id="botanas-section" className="menu-title">
              Botanas
            </h2>
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
