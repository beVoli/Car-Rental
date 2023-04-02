import "./App.css";
import CarDescription from "./components/CarPicker/CarDescription";
import CarModel from "./components/CarPicker/CarModel";
import CarPicker from "./components/CarPicker/CarPicker";

const App = () => {
  return (
    <div className="container">
      <CarPicker />
    </div>
  );
};

export default App;
