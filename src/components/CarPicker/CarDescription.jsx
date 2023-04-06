import "./CarDescription.css";

const CarDescription = (props) => {

  const openModalHandler = () => {
      props.onOpenModal();
  }

  return (
    <div className="car-description">
      <div className="description-price">
        $ <span>{props.car.price}</span> / rent per day
      </div>
      <div className="description-table">
        <div className="description-row flex-group">
          <p>Mark</p>
          <span>{props.car.mark}</span>
        </div>
        <div className="description-row flex-group">
          <p>Model</p>
          <span>{props.car.model}</span>
        </div>
        <div className="description-row flex-group">
          <p>Year</p>
          <span>{props.car.year}</span>
        </div>
        <div className="description-row flex-group">
          <p>Transmission</p>
          <span>{props.car.transmission}</span>
        </div>
        <div className="description-row flex-group">
          <p>Fuel</p>
          <span>{props.car.fuel}</span>
        </div>
        <div className="description-row flex-group">
          <p>Horsepower</p>
          <span>{props.car.horsepower}</span>
        </div>
        <div className="description-row flex-group">
          <p>Doors</p>
          <span>{props.car.doors}</span>
        </div>
      </div>

      <button className="btn-reserve" onClick={openModalHandler}>Reserve Now</button>
    </div>
  );
};

export default CarDescription;
