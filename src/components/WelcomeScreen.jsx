import "./styles/WelcomeScreen.css";
import PropTypes from "prop-types";

function WelcomeScreen({ onNext }) {
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
        <button className="next-button" onClick={onNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

WelcomeScreen.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default WelcomeScreen;
