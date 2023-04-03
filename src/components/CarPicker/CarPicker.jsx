import { useState } from "react";
import PickerTtitle from "./PickerTitle";
import CarDescription from "./CarDescription";
import CarModel from "./CarModel";
import "./CarPicker.css";

const CarPicker = (props) => {
  const [currentCar, setCurrentCar] = useState(props.models[0]);

  const changeInfoHandler = (car) => {
    setCurrentCar(car);
  };

  return (
    <div className="picker-container">
      <PickerTtitle />
      <div className="section-picker">
        <CarModel models={props.models} onCarInfo={changeInfoHandler} />
        <div className="car-preview">
          <img src={currentCar.img} alt="Car Image"></img>
        </div>
        <CarDescription models={props.models} car={currentCar} />
      </div>
    </div>
  );
};

export default CarPicker;
