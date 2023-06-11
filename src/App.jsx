import "./App.css";
import CarInfo from "./components/CarInfo/CarInfo.component";
import Navigation from "./components/Navigation/Navigation.component";
import OrderButton from "./components/OrderButton/OrderButton.component";

function App() {
  return (
    <>
      <div className="main-hero">
        <Navigation />
        <CarInfo />
        <OrderButton />
      </div>
    </>
  );
}

export default App;
