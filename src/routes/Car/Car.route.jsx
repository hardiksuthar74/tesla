import { useEffect, useState } from "react";
import "./Car.style.css";
import CardBookingDetails from "../../components/CardBookingDetails/CardBookingDetails.component";
import CarShow from "../../components/CarShow/CarShow.component";

const Car = () => {
  const [carColor, setCarColor] = useState("silver");
  const [total, setTotal] = useState(88490);

  useEffect(() => {
    setTotal(total);
  }, [carColor]);

  return (
    <div className="card-container">
      <CarShow carColor={carColor} total={total} />
      <div className="car-details">
        <CardBookingDetails
          setCarColor={setCarColor}
          setTotal={setTotal}
          total={total}
        />
      </div>
    </div>
  );
};

export default Car;
