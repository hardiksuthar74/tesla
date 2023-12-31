import { useEffect, useState } from "react";
import "./CardBookingDetails.style.css";

// eslint-disable-next-line react/prop-types
const CardBookingDetails = ({ setCarColor, setTotal, total }) => {
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
              setTotal(88490);
              setActiveBorder("modelS");
              setCarColor("silver");
              setActiveColor("silver");
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
              setTotal(108490);
              setCarColor("silver");
              setActiveColor("silver");
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
          <div>
            <img
              src="/assets/backgroundImage/color/white.png"
              onClick={() => {
                setTotal(activeBorder === "modelS" ? 88490 : 108490);
                setActiveColor("silver");
              }}
              className={`pointer-cur ${
                activeColor === "silver" ? "active-color" : ""
              }`}
            />
            <p className="car-range-i-details">Silver (default)</p>
          </div>
          <div>
            <img
              src="/assets/backgroundImage/color/black.png"
              onClick={() => {
                setTotal(
                  activeBorder === "modelS" ? 88490 + 1500 : 108490 + 1500
                );
                setActiveColor("black");
              }}
              className={`pointer-cur ${
                activeColor === "black" ? "active-color" : ""
              }`}
            />
            <p className="car-range-i-details">Black ($1,500)</p>
          </div>
          <div>
            <img
              src="/assets/backgroundImage/color/silver.png"
              onClick={() => {
                setTotal(
                  activeBorder === "modelS" ? 88490 + 1500 : 108490 + 1500
                );
                setActiveColor("grey");
              }}
              className={`pointer-cur ${
                activeColor === "grey" ? "active-color" : ""
              }`}
            />
            <p className="car-range-i-details">Grey ($1,500)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBookingDetails;
