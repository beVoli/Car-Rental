import CarDescription from "./CarDescription";
import CarModel from "./CarModel";
import "./CarPicker.css";

const CarPicker = () => {
  return (
    <div className="picker-container">
      <div className="section-title">
        <h2 className="models">Vehicle Models</h2>
        <p className="fleet">Our rental fleet</p>
        <p className="fleet-option">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="section-picker">
        <CarModel />
        <CarDescription />
      </div>
    </div>
  );
};

export default CarPicker;
