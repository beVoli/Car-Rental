import { useState } from "react";
import PickerTtitle from "./PickerTitle";
import CarDescription from "./CarDescription";
import CarModel from "./CarModel";
import CarForm from "./CarForm";
import "./CarPicker.css";

const CarPicker = (props) => {
  const [currentCar, setCurrentCar] = useState(props.models[0]);
  const [modalActive, setModalActive] = useState(false);

  const changeInfoHandler = (car) => {
    setCurrentCar(car);
  };

  const formSubmitHandler = () => {
    setModalActive(false);
  };

  const openModalHandler = () => {
    setModalActive(true);
  };

  return (
    <>
      <div className="picker-container">
        <PickerTtitle />
        <div className="section-picker">
          <CarModel models={props.models} onCarInfo={changeInfoHandler} />
          <div className="car-preview">
            <img src={currentCar.img} alt="Car Image"></img>
          </div>
          <CarDescription
            models={props.models}
            car={currentCar}
            onOpenModal={openModalHandler}
          />
        </div>
      </div>
      {modalActive && <CarForm onFormSubmit={formSubmitHandler} />}
    </>
  );
};

export default CarPicker;
