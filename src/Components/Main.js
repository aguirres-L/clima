import { useEffect, useState } from "react";

import ContainerInput from "./ContainerInput";
import Card from "./Card";
import Error from "./Error";
import Button from "./Button";

export default function Main() {
  const [temperatura, setTemperatura] = useState(false);
  const [ubi, setUbi] = useState("argentina");
  
  const [error, setError] = useState(false);
  
  const [capital, setCapital] = useState();

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ubi}&appid=85c9041f55250cd9da4599f60cc500f3&units=metric`;

   try {
    
    let afetch = async () => {
      let res = await fetch(url);
      if (!res.ok) {
      setError(true)
      return
      }
      let json = await res.json();

      //console.log(json)

      setTemperatura(json.main.temp.toString().slice(0, 2));
      setCapital(json.name)
      //console.log(temperatura);
      //console.log(capital)
    };
    afetch();
    
   } catch (error) {
   // console.error("errir")
   }
  }, [ubi]);

  return (
    <div className="app">
      <ContainerInput setError={setError} setUbi={setUbi} />

      {error ? <Error ubi={ubi}/> :""}
      
      {error? "" :<Card ubi={ubi} name={capital} temp={temperatura?temperatura:"0"} />}

    <Button setUbi={setUbi} />
    </div>
  );
}
