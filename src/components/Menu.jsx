import "./styles/Menu.css";
import { useContext } from "react";
import { Context } from "../App";
import Header from "./Header";
import MenuContent from "./MenuContent";
import MenuCategories from "./MenuCategories";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [totalCartItems] = useContext(Context);

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

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/cart");
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
        <MenuContent scrollToTop={scrollToTop} />
        <div className="go-to-cart">
          <button className="go-to-cart-button" onClick={handleNext}>
            Ir a carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
