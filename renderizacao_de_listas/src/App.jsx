import {useState } from 'react';
import './App.css';

import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';


function App() {
  const [count, setCount] = useState(0)

  const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km:0},
    {id: 2, brand: "KIA", color:"Branco", newCar: false, km:56784}, 
    {id: 3, brand: "Renault", color:"Azul", newCar: false, km:454},  
  ]

  return (
    <>
      <ListRender/>
      <ConditionalRender/>
      
      {/*props*/}
      <ShowUserName name={userName}/>

      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

      {/*reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/*lopp em array de objetos*/}
      {cars.map((car) =>(
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}         
          />

      ))}
      {/*Fragment*/}
      <Fragment propFragment = "teste"/>
    </>
  )
}

export default App
