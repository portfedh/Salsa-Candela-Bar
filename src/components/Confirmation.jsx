import "./styles/Confirmation.css";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

function Cart() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const saveCapturedImage = () => {
    const divToCapture = document.getElementById("image-download-area");
    const fileName = "confirmacion_de_pedido.png";

    html2canvas(divToCapture, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = fileName;
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className="confirmation-menu-container">
      <div className="confirmation-menu-card">
        <div id="image-download-area">
          <img
            className="confirmation-logo-image"
            src="favicon.png"
            alt="Salsa Candela Logo"
          />
          <h1 className="confirmation-menu-title">¡Muchas Gracias!</h1>
          <p className="order-receipt-instruction">
            Por favor muestra tu código en la barra
          </p>
          <img
            className="order-receipt-qr-code"
            src="https://api.qrserver.com/v1/create-qr-code/?data=9A6l0&amp;size=200x200"
            alt="Confirmation QR Code"
          />
          <p className="order-receipt-id">9A6l0</p>
          <p className="order-receipt-date">2024-10-15</p>
          <ul className="order-receipt-items">
            <li>1 Jugo + Agua mineral </li>
            <li>1 Azulito</li>
            <li>1 Mojito</li>
          </ul>
        </div>
        <div className="order-receipt-div">
          <button
            className="order-receipt-button back-button"
            onClick={handleHome}
          >
            Volver a menu
          </button>
          <button className="order-receipt-button" onClick={saveCapturedImage}>
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
