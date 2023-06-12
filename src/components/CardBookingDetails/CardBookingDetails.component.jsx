import { useEffect, useState } from "react";
import "./CardBookingDetails.style.css";

// eslint-disable-next-line react/prop-types
const CardBookingDetails = ({ setCarColor }) => {
  const [activeBorder, setActiveBorder] = useState("modelS");
  const [activeSaving, setActiveSavings] = useState(false);
  const [savings, setSavings] = useState(false);
  const [activeColor, setActiveColor] = useState("silver");

  useEffect(() => {
    setCarColor(activeColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColor]);

  const modelS = [
    {
      modelName: "Model S",
      type: "Dual Motor All-Wheel Drive",
      price: `${!savings ? "88,490" : "81,890"}`,
      range: "405mi",
      topSpeed: "149mph",
      speedS: "3.1sec",
    },
    {
      modelName: "Model S Plaid",
      type: "Tri Motor All-Wheel Drive",
      price: `${!savings ? "108,490" : "101,890"}`,
      range: "396mi",
      topSpeed: "200mph",
      speedS: "1.99sec",
    },
  ];
  const [dataToShow, setdataToShow] = useState(modelS[0]);

  return (
    <div className="card-booking-details-container">
      <h2 className="car-header">Model S</h2>
      <p className="delivery-date">Est. Delivery: Jun – Jul 2023</p>
      <div className="purchase-details">
        <p
          onClick={() => {
            setSavings(false);
            setActiveSavings(!activeSaving);
          }}
          className={`pointer-cur individual-purhcase ${
            !activeSaving ? "active-purchase" : ""
          }`}
        >
          Purchase Price
        </p>
        <p
          onClick={() => {
            setSavings(true);
            setActiveSavings(!activeSaving);
          }}
          className={`pointer-cur individual-purhcase ${
            activeSaving ? "active-purchase" : ""
          }`}
        >
          Potential Savings
        </p>
      </div>
      <div className="car-range-details">
        <div>
          <span>{dataToShow.range}</span>
          <p className="car-range-i-details">Range (EPA est.)</p>
        </div>
        <div>
          <span>{dataToShow.topSpeed}</span>
          <p className="car-range-i-details">Top Speed</p>
        </div>
        <div>
          <span>{dataToShow.speedS}</span>
          <p className="car-range-i-details">0-60 mph</p>
        </div>
      </div>
      <div>
        <div className="pointer-cur">
          <div className="model-i-details">{modelS[0].type}</div>
          <div
            className={`model-i-details-border ${
              activeBorder === "modelS" ? "active-border" : ""
            }`}
            onClick={() => {
              setActiveBorder("modelS");
              setdataToShow(modelS[0]);
            }}
          >
            <p>{modelS[0].modelName}</p>
            <p>${modelS[0].price}</p>
          </div>
        </div>

        <div className="pointer-cur">
          <div className="model-i-details">{modelS[1].type}</div>
          <div
            className={`model-i-details-border ${
              activeBorder === "modelSPlaid" ? "active-border" : ""
            }`}
            onClick={() => {
              setActiveBorder("modelSPlaid");
              setdataToShow(modelS[1]);
            }}
          >
            <p>{modelS[1].modelName}</p>
            <p>${modelS[1].price}</p>
          </div>
        </div>
      </div>
      <div className="car-paint-container">
        <p>Paint</p>
        <div className="paint-order-container">
          <img
            src="src/assets/backgroundImage/color/white.png"
            onClick={() => {
              setActiveColor("silver");
            }}
            className={`pointer-cur ${
              activeColor === "silver" ? "active-color" : ""
            }`}
          />
          <img
            src="src/assets/backgroundImage/color/black.png"
            onClick={() => {
              setActiveColor("black");
            }}
            className={`pointer-cur ${
              activeColor === "black" ? "active-color" : ""
            }`}
          />
          <img
            src="src/assets/backgroundImage/color/silver.png"
            onClick={() => {
              setActiveColor("grey");
            }}
            className={`pointer-cur ${
              activeColor === "grey" ? "active-color" : ""
            }`}
          />
          <img />
          <img />
        </div>
      </div>
    </div>
  );
};

export default CardBookingDetails;
