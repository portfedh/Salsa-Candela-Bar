import "./styles/MenuItem.css";
import { Context } from "../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const MenuItem = ({ id, itemName, price, amount, imageUrl, onAddToCart }) => {
  const [, , cartItems, setCartItems] = useContext(Context);

  const handleAddToCart = () => {
    // Find the item in the cart that matches the current item's id
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      // If the item exists in the cart, update its quantity
      setCartItems(
        cartItems.map((item) =>
          // Check if the current item in the map has the same id as the item being added
          item.id === id
            ? // If it does, return a new object with the same properties but increment the quantity by 1
              { ...item, quantity: item.quantity + 1 }
            : // If it doesn't, return the item as is
              item
        )
      );
    } else {
      // If the item does not exist in the cart, add it with a quantity of 1
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
