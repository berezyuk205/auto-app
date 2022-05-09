import React, {useState} from "react";
import './styles/App.css';
import AnnouncementList from "./components/AnnouncementList";

function App() {

  const [cars, setCars] = useState([
    {id: 1, markCar: 'Volvo', nameCar: 'XV 90', engine: '1.5', engineFuel: 'Gasoline'},
    {id: 2, markCar: 'Audi', nameCar: 'Q8', engine: '3', engineFuel: 'Diesel'},
    {id: 3, markCar: 'BMW', nameCar: 'X5m', engine: '1.5', engineFuel: 'Gasoline'},
    {id: 4, markCar: 'BMW', nameCar: 'X5m', engine: '1.5', engineFuel: 'Gasoline'},
    {id: 5, markCar: 'BMW', nameCar: 'X5m', engine: '1.5', engineFuel: 'Gasoline'},
    {id: 6, markCar: 'BMW', nameCar: 'X5m', engine: '1.5', engineFuel: 'Gasoline'}
    ])

  return (
    <div className="App">
      {cars.map(car =>
        <AnnouncementList car={car} key={car.id}/>
      )}
    </div>
  );
}

export default App;
