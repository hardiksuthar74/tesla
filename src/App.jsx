import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home/Home.route";
import Car from "./routes/Car/Car.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car" element={<Car />} />
    </Routes>
  );
}

export default App;
