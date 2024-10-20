import "./styles/Confirmation.css";
// import { useNavigate } from "react-router-dom";

function Cart() {
  // const navigate = useNavigate();

  // const handleHome = () => {
  //   navigate("/");
  // };

  return (
    <div className="menu-container">
      <div className="menu-card">
        <h1 className="menu-title">¡Muchas Gracias!</h1>
        <p>Por favor muestra tu codigo en la barra</p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=9A6l0&amp;size=200x200"
          alt="Confirmation QR Code"
        />
        <p>9A6l0</p>
        <p>1 Victoria</p>
        <p>1 Azulito</p>
        <p>1 Mojito</p>

        <div>
          <button className="menu-button">Volver a menu</button>
          <button className="menu-button">Descargar</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
