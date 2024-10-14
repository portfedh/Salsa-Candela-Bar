import "./Menu.css";
import { useState } from "react";
import CartIcon from "./CartIcon";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const menuData = {
  aguas: [
    {
      itemName: "Agua",
      price: 20,
      amount: "473ml",
      imageUrl: "/img/ciel-240x240.jpg",
    },
    {
      itemName: "Agua Mineral",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/penafiel-240x240.webp",
    },
  ],
  jugos: [
    {
      itemName: "Jugo Naranja",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-naranja-240x240.jpg",
    },
    {
      itemName: "Jugo Manzana",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-manzana-240x240.jpg",
    },
    {
      itemName: "Jugo Uva",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-uva-240x240.jpg",
    },
    {
      itemName: "Jugo Mango",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-mango-240x240.jpg",
    },
    {
      itemName: "Jugo Piña",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-pina-240x240.jpg",
    },
    {
      itemName: "Jugo Durazno",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-durazno-240x240.jpg",
    },
    {
      itemName: "Jugo Piña Coco",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/jumex-pina-coco-240x240.jpg",
    },
  ],
  refrescos: [
    {
      itemName: "Coca Cola",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/coca-cola-240x240.webp",
    },
    {
      itemName: "Sprite",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/sprite-240x240.webp",
    },
    {
      itemName: "Squirt",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/squirt-240x240.webp",
    },
    {
      itemName: "Manzanita",
      price: 30,
      amount: "473ml",
      imageUrl: "/img/manzanita-240x240.jpg",
    },
  ],
  cervezas: [
    {
      itemName: "Heineken",
      price: 50,
      amount: "473ml",
      imageUrl: "/img/heineken-240x240.webp",
    },
    {
      itemName: "Corona",
      price: 50,
      amount: "473ml",
      imageUrl: "/img/corona-240x240.webp",
    },
    {
      itemName: "Victoria",
      price: 50,
      amount: "473ml",
      imageUrl: "/img/victoria-240x240.webp",
    },
  ],
  vodka: [
    {
      itemName: "Vodka y Coca",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/vodka-coca-240x240.webp",
    },
    {
      itemName: "Azulito",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/azulito-240x240.webp",
    },
    {
      itemName: "Desarmador",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/vodka-jugo-240x240.webp",
    },
  ],
  whiskey: [
    {
      itemName: "Whiskey y Coca",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/whiskey-coca-240x240.webp",
    },
    {
      itemName: "Whiskey y Refresco Manzanza",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/whiskey-manzana-240x240.webp",
    },
    {
      itemName: "Whiskey Agua Mineral",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/whiskey-agua-240x240.webp",
    },
  ],
  ron: [
    {
      itemName: "Ron y Coca",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/ron-coca-240x240.webp",
    },
    {
      itemName: "Mojito",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/mojito-240x240.webp",
    },
    {
      itemName: "Mojito Mango",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/mojito-mango-240x240.webp",
    },
    {
      itemName: "Piña Colada",
      price: 100,
      amount: "473ml",
      imageUrl: "/img/pina-colada-240x240.webp",
    },
  ],
  botanas: [
    {
      itemName: "Chicharrones",
      price: 20,
      amount: "473ml",
      imageUrl: "/img/chicharron-240x240.png",
    },
  ],
};

function Menu() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <h1 className="menu-heading">
            <a href="#" onClick={scrollToTop}>
              Menu
            </a>
          </h1>
          <CartIcon cartCount={cartItems} />
        </div>

        <button
          className="category-button"
          onClick={() => scrollToSection("aguas-section")}
        >
          Aguas $20
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("jugos-section")}
        >
          Jugos $30
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("refrescos-section")}
        >
          Refrescos $30
        </button>

        <button
          className="category-button"
          onClick={() => scrollToSection("cervezas-section")}
        >
          Cervezas $50
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
                      amount={item.amount}
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
