import { useEffect } from "react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CarShow = ({ carColor, total }) => {
  const CarImage = [
    `src/assets/backgroundImage/modelS/modelS1-${carColor}.jpg`,
    `src/assets/backgroundImage/modelS/modelS2-${carColor}.jpg`,
    `src/assets/backgroundImage/modelS/modelS3-${carColor}.jpg`,
    `src/assets/backgroundImage/modelS/modelS4-${carColor}.jpg`,
    `src/assets/backgroundImage/modelS/modelS5.jpg`,
  ];

  const [i, setI] = useState(0);
  const [bgImage, setBgImage] = useState(CarImage[i]);

  useEffect(() => {
    setBgImage(CarImage[i]);
  }, [i, carColor]);

  const changePicture = (position) => {
    if ((position === "right") & (i !== 4)) {
      setI(i + 1);
    } else if ((position === "left") & (i !== 0)) {
      setI(i - 1);
    } else return;
  };
  return (
    <div className="car-image-container">
      <div>
        <i onClick={() => changePicture("left")} className="arrow left-arrow">
          &#8592;
        </i>
        <img src={bgImage} />
        <i onClick={() => changePicture("right")} className="arrow right-arrow">
          &#8594;
        </i>
      </div>
      <div className="car-bill-total">{`$${total} Vehicle Price`}</div>
    </div>
  );
};

export default CarShow;
