import { useState } from "react";

const CardBookingDetails = () => {
  const modelS = [
    {
      modelName: "Model S",
      type: "Dual Motor All-Wheel Drive",
      price: "88,490",
      range: "405mi",
      topSpeed: "149mph",
      speedS: "3.1sec",
    },
    {
      modelName: "Model S Plaid",
      type: "Tri Motor All-Wheel Drive",
      price: "108,490",
      range: "396mi",
      topSpeed: "200mph",
      speedS: "1.99sec",
    },
  ];
  const [dataToShow, setdataToShow] = useState(modelS[0]);

  return (
    <div style={{ textAlign: "center", marginLeft: "10px" }}>
      <h2
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "3.8rem",
          fontWeight: "500",
        }}
      >
        Model S
      </h2>
      <p style={{ fontSize: "1.2rem" }}>Est. Delivery: Jun – Jul 2023</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          fontSize: "1.2rem",
          margin: "1.8rem 4rem",
          padding: "0.6rem 0",
          background: "#cfcfcf",
          borderRadius: "1.2rem",
        }}
      >
        <p
          className="pointer-cur"
          style={{
            background: "white",
            padding: "0.4rem 1.4rem",
            borderRadius: "1rem",
          }}
        >
          Purchase Price
        </p>
        <p
          className="pointer-cur"
          style={{
            padding: "0.4rem 1rem",
          }}
        >
          Potential Savings
        </p>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "2.6rem",
          justifyContent: "center",
          gap: "1.2rem",
          marginTop: "6rem",
        }}
      >
        <div>
          <span>{dataToShow.range}</span>
          <p
            style={{ fontSize: "1.4rem", color: "#b9b9b9", marginTop: "1rem" }}
          >
            Range (EPA est.)
          </p>
        </div>
        <div>
          <span>{dataToShow.topSpeed}</span>
          <p
            style={{ fontSize: "1.4rem", color: "#b9b9b9", marginTop: "1rem" }}
          >
            Top Speed
          </p>
        </div>
        <div>
          <span>{dataToShow.speedS}</span>
          <p
            style={{ fontSize: "1.4rem", color: "#b9b9b9", marginTop: "1rem" }}
          >
            0-60 mph
          </p>
        </div>
      </div>
      <div>
        {modelS.map((model, index) => {
          return (
            <div key={index} className="pointer-cur">
              <div
                style={{
                  textAlign: "left",
                  fontSize: "1.8rem",
                  marginTop: "5rem",
                }}
              >
                {model.type}
              </div>
              <div
                onClick={() => setdataToShow(modelS[index])}
                style={{
                  display: "flex",
                  fontSize: "1.6rem",
                  justifyContent: "space-between",
                  border: `solid 2px grey`,
                  padding: "1rem 2rem",
                  marginTop: "1rem",
                }}
              >
                <p>{model.modelName}</p>
                <p>${model.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBookingDetails;
