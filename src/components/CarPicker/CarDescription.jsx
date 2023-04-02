import "./CarDescription.css";
import AudiA1 from "../../images/audia1.jpg";
import Benz from "../../images/benz.jpg";
import Bmw320 from "../../images/bmw320.jpg";
import Golf6 from "../../images/golf6.jpg";
import PassatCC from "../../images/passatcc.jpg";
import Camry from "../../images/toyotacamry.jpg";

const CarDescription = () => {
  return (
    <div className="car-description">
      <div className="car-preview">
        <img src={Bmw320} alt="Car Image"></img>
      </div>
      <div className="pick-description">
        <div className="description-price">
          <p>
            $ <span>37</span> / rent per day
          </p>
        </div>

        <div className="description-table">
          <div className="description-row">
            <p>Model</p>
            <span>Golf 6</span>
          </div>

          <div className="description-row">
            <p>Mark</p>
            <span>Volkswagen</span>
          </div>

          <div className="description-row">
            <p>Year</p>
            <span>2008</span>
          </div>

          <div className="description-row">
            <p>Doors</p>
            <span>5</span>
          </div>

          <div className="description-row">
            <p>Horsepower</p>
            <span>143</span>
          </div>

          <div className="description-row">
            <p>Transmission</p>
            <span>Manual</span>
          </div>

          <div className="description-row">
            <p>Fuel</p>
            <span>Diesel</span>
          </div>
        </div>

        <button className="btn-reserve">Reserve Now</button>
      </div>
    </div>
  );
};

export default CarDescription;
