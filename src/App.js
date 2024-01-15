import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AnimalShow  from './AnimalShow'


function getRandomAnimals(){
  const animal =['bird','cat','gator','dog','cow','horse'];
  return animal[Math.floor(Math.random()*animal.length)];
}

function App() {
  
  const[animal,setAnimal] =  useState([]);
 const  handleAddClick = ()=>{
  setAnimal([...animal,getRandomAnimals()])
  };

  return (
    <div className="App">
      <button className='addButton' onClick={handleAddClick}>ADD ANIMAL</button>
      {/* {animal} */}
     <div style={{display:"flex"}}>
     {animal.map((animal,index)=>{
       return <AnimalShow className="animalList" type={animal} key={index}/>
      })}
      </div> 
    </div>
  );
}

export default App;
