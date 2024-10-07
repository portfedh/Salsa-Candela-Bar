import "./PromotionsMessage.css";
import LogoIcon from "./LogoIcon";
import PropTypes from "prop-types";

function PromotionsMessage({ onNext }) {
  return (
    <div className="promotions-container">
      <div className="promotions-card">
        <div className="logo">
          <LogoIcon />
        </div>
        <h1 className="promotions-heading">Estas son nuestras promociones:</h1>

        <div className="promotions-content">
          <div className="promotion-section">
            <h2 className="promotion-title">Cervezas:</h2>
            <ul className="promotion-list">
              <li>1 X $50</li>
              <li>2 X $90</li>
              <li>3 X $120</li>
            </ul>
          </div>

          <div className="promotion-section">
            <h2 className="promotion-title">Cócteles:</h2>
            <ul className="promotion-list">
              <li>1 X $100</li>
              <li>2 X $180</li>
            </ul>
          </div>
        </div>

        <p className="promotions-description">
          Los precios se ajustan automáticamente al finalizar la compra.
        </p>

        <button className="next-button" onClick={onNext}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

PromotionsMessage.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default PromotionsMessage;
