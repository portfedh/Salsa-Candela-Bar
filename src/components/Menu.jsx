import "./Menu.css";
import { useState } from "react";
import CartIcon from "./CartIcon";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import menuData from "../utils/menuData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const menuHeadingHeight =
      document.querySelector(".menu-heading").offsetHeight;
    const menuTitleHeight = document.querySelector(".menu-title").offsetHeight;
    const offset = menuHeadingHeight + menuTitleHeight + 30;

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
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
        <div className="menu-categories">
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
            onClick={() => scrollToSection("vodka-section")}
          >
            Vodka $100
          </button>

          <button
            className="category-button"
            onClick={() => scrollToSection("ron-section")}
          >
            Ron $100
          </button>

          <button
            className="category-button"
            onClick={() => scrollToSection("tequila-section")}
          >
            Tequila $100
          </button>

          <button
            className="category-button"
            onClick={() => scrollToSection("whiskey-section")}
          >
            Whiskey $100
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
        </div>

        <div className="menu-content">
          <div>
            {Object.keys(menuData).map((section) => (
              <div key={section} className="menu-section">
                <h2 id={`${section}-section`} className="menu-title">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <a
                    href="#"
                    onClick={scrollToTop}
                    className="scroll-to-top-icon"
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </a>
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

        <div className="go-to-cart">
          <button className="go-to-cart-button" onClick={addToCart}>
            Ir a carrito
          </button>
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Menu;
