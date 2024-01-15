import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cow from "./svg/cow.svg";
import horse from "./svg/horse.svg";
import gator from "./svg/gator.svg";
import dog from "./svg/dog.svg";
import cat from "./svg/cat.svg";
import heart from "./svg/heart.svg";
import   "./AnimalShow.css"


const animalImages={
    bird,
    cat,
    cow,
    horse,
    gator,
    dog
};
export default function AnimalShow({type}){
    const[count,setCount]=useState(0);

    const handleClick = ()=>{
        setCount(count+1);
    }
    return(
    <div className="animalShow" onClick={handleClick}>
       <img className="animalImages" alt="animal" src={animalImages[type]}/>
       <img className ="heart" alt="heart" src ={heart} style={{width:20 +10*count}}/>
    </div>
)

}