import "./styles/Menu.css";
import { useContext } from "react";
import { Context } from "../App";
import PropTypes from "prop-types";
import Header from "./Header";
import MenuContent from "./MenuContent";
import MenuCategories from "./MenuCategories";

function Menu({ onNext }) {
  const [totalCartItems, setTotalCartItems] = useContext(Context);

  const addToCart = () => {
    setTotalCartItems(totalCartItems + 1);
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
        <Header
          scrollToTop={scrollToTop}
          cartItems={totalCartItems}
          title={"Menu"}
        />
        <MenuCategories scrollToSection={scrollToSection} />
        <MenuContent scrollToTop={scrollToTop} addToCart={addToCart} />
        <div className="go-to-cart">
          <button className="go-to-cart-button" onClick={onNext}>
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
