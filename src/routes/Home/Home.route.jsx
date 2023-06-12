import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation.component";
import CarInfo from "../../components/CarInfo/CarInfo.component";
import OrderButton from "../../components/OrderButton/OrderButton.component";

const carData = [
  {
    modelName: "Model S",
    modelBgImage: "src/assets/backgroundImage/modelSBG.png",
  },
];

const Home = () => {
  const [data] = useState(carData[0]);

  const bgStyle = {
    background: `url(${data.modelBgImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="main-hero" style={bgStyle}>
      <Navigation />
      <CarInfo carData={data} />
      <OrderButton />
    </div>
  );
};

export default Home;
