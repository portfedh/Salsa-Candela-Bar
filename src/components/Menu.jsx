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
  jugo: [
    {
      itemName: "Jugo Naranja",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Manzana",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Uva",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Mango",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Piña",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Durazno",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Jugo Piña Coco",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  refresco: [
    {
      itemName: "Coca Cola",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Sprite",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Squirt",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Manzanita",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Coca Cola",
      price: 30,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  cerveza: [
    {
      itemName: "Heineken",
      price: 50,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Corona",
      price: 50,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Victoria",
      price: 50,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  vodka: [
    {
      itemName: "Vodka y Coca",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Azulito",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Desarmador",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  whiskey: [
    {
      itemName: "Whiskey y Coca",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Whiskey y Refresco Manzanza",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Whiskey Agua Mineral",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  ron: [
    {
      itemName: "Ron y Coca",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Mojito",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Mojito Mango",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
    {
      itemName: "Piña Colada",
      price: 100,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
  botanas: [
    {
      itemName: "Chicharrones",
      price: 20,
      imageUrl: "https://via.placeholder.com/120",
    },
  ],
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
          <div>
            {Object.keys(menuData).map((section) => (
              <div key={section} className="menu-section">
                <h2 id={`${section}-section`} className="menu-title">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h2>
                <div className="menu-items">
                  {menuData[section].map((item, index) => (
                    <MenuItem
                      key={index}
                      itemName={item.itemName}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>
              </div>
            ))}
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
