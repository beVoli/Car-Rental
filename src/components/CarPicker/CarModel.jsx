import ModelBtn from "./ModelBtn";
import "./CarModel.css";
import { useState } from "react";

const CarModel = (props) => {
  const carInfoHandler = (car) => {
    props.onCarInfo(car);
  };

  const [colorBtn, setColorBtn] = useState(0);

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "active" : "";
  };

  return (
    <div className="picker-box">
      {props.models.map((model, index) => (
        <ModelBtn
          key={model.id}
          model={model}
          index={index}
          coloringButton={coloringButton}
          btnID={btnID}
          onShowInfo={carInfoHandler}
        />
      ))}
    </div>
  );
};

export default CarModel;
