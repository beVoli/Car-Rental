import ModelBtn from "./ModelBtn";
import "./CarModel.css";


const CarModel = (props) => {

  const carInfoHandler = (car) => {
    props.onCarInfo(car);
  }

  return (
    <div className="picker-box">
      {props.models.map((model, index) => <ModelBtn key={model.id} model={model} onShowInfo={carInfoHandler} />)}
    </div>
  );
};

export default CarModel;
