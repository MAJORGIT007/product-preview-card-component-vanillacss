import "./App.css";
import cartIcon from "../public/icon-cart.svg";

function App() {
  return (
    <div className="component">
      <div className="productImage"></div>
      <div className="text-component">
        <h3 className="item">PERFUME</h3>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price-component">
          <h1 className="currentPrice">$149.99</h1>
          <p className="originalPrice">$169.99</p>
        </div>
        <button className="cartBtn">
          <img src={cartIcon} alt="cart icon" className="cartIcon" />
          Add to Card
        </button>
      </div>
    </div>
  );
}

export default App;
