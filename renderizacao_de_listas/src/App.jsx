import {useState } from 'react';
import './App.css';

import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  const [count, setCount] = useState(0)

  const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km:0},
    {id: 2, brand: "KIA", color:"Branco", newCar: false, km:56784}, 
    {id: 3, brand: "Renault", color:"Azul", newCar: false, km:454},  
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  };

  const [message,setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg);
  };

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
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}         
          />

      ))}
      {/*Fragment*/}
      <Fragment propFragment = "teste"/>

      {/*Children*/}
      <Container myValue = "testing">
        <p>Conteúdo</p>
      </Container>

      {/*Executar função*/}
      <ExecuteFunction myFunction = {showMessage}/>

      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

    </>
  )
}

export default App
