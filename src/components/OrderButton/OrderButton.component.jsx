import { useNavigate } from "react-router-dom";
import "./OrderButton.style.css";

const OrderButton = () => {
  const navigate = useNavigate();

  return (
    <div className="order-main">
      <div
        onClick={() => navigate("/car")}
        className="button btn-grey pointer-cur"
      >
        Order Now
      </div>
      <div className="button btn-cream pointer-cur">Demo Drive</div>
    </div>
  );
};

export default OrderButton;
