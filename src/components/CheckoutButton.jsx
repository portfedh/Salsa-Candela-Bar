// import axios from "axios";
// import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// const CheckoutButton = ({ cartItems }) => {
const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleConfirmation = () => {
    navigate("/confirmation");
  };

  // const handleCheckout = async () => {
  //   try {
  //     console.log("Starting checkout with items:", cartItems);
  //     alert("Proceed to payment");
  //     const response = await axios.post(
  //       "https://admin.salsa-candela.com/bar-checkout",
  //       { cartItems }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error starting checkout:", error);
  //   }
  // };

  return (
    <>
      <button
        className="go-to-cart-button payment-button"
        onClick={handleConfirmation}
      >
        Pagar
      </button>
    </>
  );
};

// CheckoutButton.propTypes = {
//   cartItems: PropTypes.array.isRequired,
// };

export default CheckoutButton;
