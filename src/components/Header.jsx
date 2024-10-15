import CartIcon from "./CartIcon";
import PropTypes from "prop-types";

const Header = ({ scrollToTop, cartItems }) => (
  <div className="header">
    <div className="logo">
      <img className="logo-image" src="favicon.png" alt="Salsa Candela Logo" />
    </div>
    <h1 className="menu-heading">
      <a href="#" onClick={scrollToTop}>
        Menu
      </a>
    </h1>
    <CartIcon cartCount={cartItems} />
  </div>
);

Header.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  cartItems: PropTypes.number.isRequired,
};

export default Header;
