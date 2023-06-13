import {useEffect, useState} from "react";

export default function Card({ temp, ubi,name }) {

// tratar de modificar el valor de los span determinando si esta nublado o solodado , ya que la api me da esa informacion

  let data = new Date()
  
    const [hora, setHora] = useState();
    const [minutos, setMinutos] = useState();
    const [segundo, setSegundo] = useState();
  
  let mes = data.getDate();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setHora(currentDate.getHours());
      setMinutos(currentDate.getMinutes());
      setSegundo(currentDate.getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  console.log(hora)
  


  return (
    <div className="card">
      <div className="container">
        <div className="cloud front">
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className="sun"></span>

        <div className="cloud back">
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <div className="card-header">
        <span>{ubi ? name : ""}</span>
        <span>
          <div className="deteToday">
            <p>{mes}</p>
            <p className="timenow">{hora}:{minutos}:{segundo}</p>
          </div>
        </span>
      </div>
      <span className="temp">{temp}º</span> {/**temeratura  */}
      <div className="temp-scale">
        <span>Celcuis</span>
      </div>
    </div>
  );
}
