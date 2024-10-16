import "./Header.css";
import CartIcon from "./CartIcon";
import PropTypes from "prop-types";

const Header = ({ scrollToTop, cartItems, title, icon }) => (
  <div className="header">
    <div className="logo">
      <img className="logo-image" src="favicon.png" alt="Salsa Candela Logo" />
    </div>
    <h1 className="menu-heading">
      <a href="#" onClick={scrollToTop}>
        {title}
      </a>
    </h1>
    <div style={{ visibility: icon ? "visible" : "hidden" }}>
      <CartIcon cartCount={cartItems} />
    </div>
  </div>
);

Header.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  cartItems: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  icon: PropTypes.bool.isRequired,
};

export default Header;
