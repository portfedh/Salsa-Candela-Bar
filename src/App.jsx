import { useState, createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import PromotionsMessage from "./components/PromotionsMessage";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Confirmation from "./components/Confirmation";

export const Context = createContext();

function App() {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider
      value={[totalCartItems, setTotalCartItems, cartItems, setCartItems]}
    >
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/promotions" element={<PromotionsMessage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
