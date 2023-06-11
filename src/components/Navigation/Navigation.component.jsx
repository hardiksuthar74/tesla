import "./Navigation.style.css";
import Logo from "../../assets/backgroundImage/tesla-logo-png-2244.png";

const Navigation = () => {
  return (
    <div className="top-nav">
      <div className="logo pointer-cur">
        <img src={Logo} />
      </div>
      <div className="middle-nav">
        <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
          <li>Powerwall</li>
        </ul>
      </div>
      <div className="top-right-nav">
        <ul>
          <li className="pointer-cur">Shop</li>
          <li className="pointer-cur">Account</li>
          <li className="pointer-cur">Menu</li>
        </ul>
      </div>
      <div className="mob-nav pointer-cur">Menu</div>
    </div>
  );
};

export default Navigation;
