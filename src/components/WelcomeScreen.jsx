import "./WelcomeScreen.css";

function WelcomeScreen() {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="logo">
          <img src="logo.png" alt="Salsa Candela Logo" />
        </div>
        <div className="welcome-content">
          <h1 className="welcome-message">Bienvenid@ a Salsa Candela!</h1>
        </div>
        <button className="next-button">Siguiente</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
