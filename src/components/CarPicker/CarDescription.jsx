import "./CarDescription.css";

const CarDescription = ({models, car, onOpenModal}) => {

  const openModalHandler = () => {
      onOpenModal();
  }

  return (
    <div className="car-description">
      <div className="description-price">
        $ <span>{car.price}</span> / rent per day
      </div>
      <div className="description-table">
        <div className="description-row flex-group">
          <p>Mark</p>
          <span>{car.mark}</span>
        </div>
        <div className="description-row flex-group">
          <p>Model</p>
          <span>{car.model}</span>
        </div>
        <div className="description-row flex-group">
          <p>Year</p>
          <span>{car.year}</span>
        </div>
        <div className="description-row flex-group">
          <p>Transmission</p>
          <span>{car.transmission}</span>
        </div>
        <div className="description-row flex-group">
          <p>Fuel</p>
          <span>{car.fuel}</span>
        </div>
        <div className="description-row flex-group">
          <p>Horsepower</p>
          <span>{car.horsepower}</span>
        </div>
        <div className="description-row flex-group">
          <p>Doors</p>
          <span>{car.doors}</span>
        </div>
      </div>

      <button className="btn-reserve" onClick={openModalHandler}>Reserve Now</button>
    </div>
  );
};

export default CarDescription;
