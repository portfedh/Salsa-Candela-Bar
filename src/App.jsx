import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import PromotionsMessage from "./components/PromotionsMessage";
import Menu from "./components/Menu";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      id: "welcome",
      component: <WelcomeScreen onNext={() => setCurrentScreen(1)} />,
    },
    {
      id: "promotions",
      component: <PromotionsMessage onNext={() => setCurrentScreen(2)} />,
    },
    {
      id: "menu",
      component: <Menu />,
    },
  ];

  return <div>{screens[currentScreen].component}</div>;
}

export default App;
