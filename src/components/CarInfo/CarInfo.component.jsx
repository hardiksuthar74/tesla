import "./CarInfo.style.css";

const CarInfo = ({ carData }) => {
  const { modelName } = carData;
  return (
    <div className="main-info">
      <div className="info-title">{modelName}</div>
      <p className="info-sub pointer-cur">View Inventory</p>
      <p className="underline"></p>
    </div>
  );
};

export default CarInfo;
