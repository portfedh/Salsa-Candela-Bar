import PropTypes from "prop-types";
import "./MenuItem.css";
// import { useContext } from "react";
// import { Context } from "../App";

const MenuItem = ({ itemName, price, amount, imageUrl, onAddToCart }) => {
  // const [cartItems, setCartItems] = useContext(Context);

  // console.log(cartItems);

  // function AddToCart() {
  //   setCartItems([...cartItems, { itemName, price, amount }]);
  //   onAddToCart;
  // }

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={itemName} />
      <p>{itemName}</p>
      <p>${price}</p>
      <p>{amount}</p>
      <button onClick={onAddToCart}>+</button>
    </div>
  );
};

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MenuItem;
