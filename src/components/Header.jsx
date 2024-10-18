import "./Header.css";
import CartIcon from "./CartIcon";
import PropTypes from "prop-types";

const Header = ({ scrollToTop, cartItems, title }) => (
  <div className="header">
    <div className="logo">
      <img className="logo-image" src="favicon.png" alt="Salsa Candela Logo" />
    </div>
    <h1 className="menu-heading">
      <a href="#" onClick={scrollToTop}>
        {title}
      </a>
    </h1>
    <div>
      <CartIcon cartCount={cartItems} />
    </div>
  </div>
);

Header.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
  cartItems: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
