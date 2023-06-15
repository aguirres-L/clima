import { useState } from "react";

export default function WhatTemperature({temp,setTemperatura}){

    const [isCelcuis, setIsCelcuis] = useState(false);
    //console.log(temp);

 /*    const handleTemperatura =()=>{
        if(isCelcuis === "Celcuis") {
            setIsCelcuis("fahrenheit")
            setTemperatura(temp)
        };
        
        if(isCelcuis ==="Fahrenheit") {
            setIsCelcuis("Celcuis")
            setTemperatura((temp * 9) / 5 + 32);
        };
        console.log('hola');
    } */
    
    const handleC =()=>{
        const volverACelsius = (temp - 32) * 5/9;
        if(isCelcuis === true) {
            setTemperatura(volverACelsius.toFixed(1))
            return
        }
    
        const temperaturaF = (temp * 9) / 5 + 32;
    
        setTemperatura(temperaturaF);
        setIsCelcuis(false);
        console.log(isCelcuis);
    }
    
    const handleF =()=>{
    
       
    
        //(68 - 32) / 1.8
        const temperaturaC = (temp * 9/5)+32
        
        setTemperatura(temperaturaC);
        setIsCelcuis(true);
        
        if(isCelcuis === false){
            let volverAFarh  = ((temp*9/5)+32)
            setTemperatura(volverAFarh)
        }
        console.log(isCelcuis);
        
    }
    
    return(
        <div className="temp-scale">
        {isCelcuis ? <button onClick={handleC} >Cº</button> :<button onClick={handleF} >Fº</button>}
        
        
      </div>
    )
}