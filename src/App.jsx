import { useState, createContext } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import PromotionsMessage from "./components/PromotionsMessage";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

export const Context = createContext();

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(0);
  // const [cartItems, setCartItems] = useState([]);

  const handleFwd = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handleBack = () => {
    setCurrentScreen(currentScreen - 1);
  };

  const screens = [
    {
      id: "welcome",
      component: <WelcomeScreen onNext={handleFwd} />,
    },
    {
      id: "promotions",
      component: <PromotionsMessage onNext={handleFwd} />,
    },
    {
      id: "menu",
      component: <Menu onNext={handleFwd} />,
    },
    {
      id: "cart",
      component: <Cart onBack={handleBack} onNext={handleFwd} />,
    },
  ];

  return (
    <Context.Provider value={[totalCartItems, setTotalCartItems]}>
      {screens[currentScreen].component}
    </Context.Provider>
  );
}

export default App;
