import "./styles/MenuItem.css";
import { Context } from "../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const MenuItem = ({
  drinkId,
  itemName,
  unitPrice,
  volume,
  imageUrl,
  categoryId,
}) => {
  const [totalCartItems, setTotalCartItems, cartItems, setCartItems] =
    useContext(Context);

  const handleAddToCart = () => {
    // Find the item in the cart that matches the current item's id
    const existingItem = cartItems.find((item) => item.drinkId === drinkId);

    if (existingItem) {
      // If the item exists in the cart, update its quantity
      setCartItems(
        cartItems.map((item) =>
          // Check if the current item in the map has the same id as the item being added
          item.drinkId === drinkId
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
        {
          drinkId,
          itemName,
          unitPrice,
          volume,
          imageUrl,
          categoryId,
          quantity: 1,
        },
      ]);
    }

    // Update the total number of items in the cart for the cart icon
    setTotalCartItems(totalCartItems + 1);
  };

  return (
    <div className="menu-item">
      <img src={imageUrl} alt={itemName} />
      <p>{itemName}</p>
      <p>${unitPrice}</p>
      <p>{volume}</p>
      <button onClick={handleAddToCart}>+</button>
    </div>
  );
};

MenuItem.propTypes = {
  drinkId: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  volume: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default MenuItem;
