import "./PromotionsMessage.css";

function PromotionsMessage() {
  return (
    <div className="promotions-container">
      <div className="promotions-card">
        <h2 className="promotions-heading">Estas son nuestras promociones:</h2>

        <div className="promotion-section">
          <h3 className="promotion-title">Cervezas:</h3>
          <ul className="promotion-list">
            <li>1 X $50</li>
            <li>2 X $90</li>
            <li>3 X $120</li>
          </ul>
        </div>

        <div className="promotion-section">
          <h3 className="promotion-title">Cocteles:</h3>
          <ul className="promotion-list">
            <li>1 X $100</li>
            <li>2 X $180</li>
          </ul>
        </div>

        <p className="promotions-description">
          Los precios se ajustan automáticamente al finalizar la compra.
        </p>
      </div>
    </div>
  );
}

export default PromotionsMessage;
