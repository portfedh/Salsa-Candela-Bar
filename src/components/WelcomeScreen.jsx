import "./styles/WelcomeScreen.css";
import { useNavigate } from "react-router-dom";

function WelcomeScreen() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/promotions");
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="logo">
          <img
            className="logo-welcome"
            src="logo.png"
            alt="Salsa Candela Logo"
          />
        </div>
        <div className="welcome-content">
          <h1 className="welcome-message">
            Bienvenid@ <br></br>a Salsa Candela!
          </h1>
        </div>
        <button className="next-button" onClick={handleNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
