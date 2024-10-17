import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import PromotionsMessage from "./components/PromotionsMessage";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

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

  return <div>{screens[currentScreen].component}</div>;
}

export default App;
