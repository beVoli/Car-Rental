import "./App.css";
import CarDescription from "./components/CarPicker/CarDescription";
import CarModel from "./components/CarPicker/CarModel";
import CarPicker from "./components/CarPicker/CarPicker";

import AudiA1 from "./images/Cars/audia1.jpg";
import Benz from "./images/Cars/benz.jpg";
import Bmw320 from "./images/Cars/bmw320.jpg";
import Golf6 from "./images/Cars/golf6.jpg";
import PassatCC from "./images/Cars/passatcc.jpg";
import Camry from "./images/Cars/toyotacamry.jpg";

const CAR_MODELS = [
  {
    model: "A1",
    mark: "Audi",
    year: 2012,
    doors: 4,
    horsepower: 120,
    transmission: "Manual",
    fuel: "Gasoline",
    price: 40,
    img: AudiA1,
    id: 1,
  },
  {
    model: "Golf 6",
    mark: "Volkswagen",
    year: 2008,
    doors: 4,
    horsepower: 140,
    transmission: "Manual",
    fuel: "Diesel",
    price: 37,
    img: Golf6,
    id: 2,
  },
  {
    model: "Camry",
    mark: "Toyota",
    year: 2006,
    doors: 4,
    horsepower: 135,
    transmission: "Automatic",
    fuel: "Hybrid",
    price: 30,
    img: Camry,
    id: 3,
  },
  {
    model: "320",
    mark: "BMW",
    year: 2012,
    doors: 4,
    horsepower: 156,
    transmission: "Manual",
    fuel: "Diesel",
    price: 37,
    img: Bmw320,
    id: 4,
  },
  {
    model: "GLK",
    mark: "Mercedes-Benz",
    year: 2006,
    doors: 4,
    horsepower: 170,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 50,
    img: Benz,
    id: 5,
  },
  {
    model: "Passat",
    mark: "Volkswagen",
    year: 2008,
    doors: 4,
    horsepower: 136,
    transmission: "Automatic",
    fuel: "Gasoline",
    price: 28,
    img: PassatCC,
    id: 6,
  },
];

const App = () => {
  return (
    <div className="container">
      <CarPicker models={CAR_MODELS} />
    </div>
  );
};

export default App;
