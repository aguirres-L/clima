import { useState } from "react";

export default function WhatTemperature({temp,setTemperatura}){

    const [isTemperatura, setIsTemperatura] = useState("Celcuis");

    const handleTemperatura =()=>{
        if(isTemperatura === "Celcuis") {
            setIsTemperatura("fahrenheit")
            setTemperatura((temp * 9) / 5 + 32);
        };
        
        if(isTemperatura ==="fahrenheit") {
            setTemperatura("Celcuis")
            setTemperatura(temp)
        };
        console.log('hola');
    }
        
    return(
        <div className="temp-scale">
        <button onClick={handleTemperatura} >{isTemperatura}</button>
      </div>
    )
}