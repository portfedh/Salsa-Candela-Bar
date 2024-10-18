import "./styles/MenuItem.css";
import { Context } from "../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const MenuItem = ({ id, itemName, price, amount, imageUrl, onAddToCart }) => {
  const [, , cartItems, setCartItems] = useContext(Context);

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { id, itemName, price, amount, imageUrl, quantity: 1 },
      ]);
    }

    onAddToCart();
  };

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={itemName} />
      <p>{itemName}</p>
      <p>${price}</p>
      <p>{amount}</p>
      <button onClick={handleAddToCart}>+</button>
    </div>
  );
};

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MenuItem;
