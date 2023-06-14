import { useEffect, useState } from "react";
import WhatTemperature from "./WhatTemperature";

export default function Card({ temp, ubi, name,setTemperatura }) {
  // tratar de modificar el valor de los span determinando si esta nublado o solodado , ya que la api me da esa informacion


  const [hora, setHora] = useState();
  const [minutos, setMinutos] = useState();
  const [segundo, setSegundo] = useState();


  const obtenerFechaActual = () => {
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
    const fecha = new Date();
  
    const diaSemana = diasSemana[fecha.getDay()];// genro un for para poder obtnere la fecha justa?
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];// genro un for para poder obtnere la fecha justa?
  
    const fechaFormateada = `${diaSemana} ${dia} de ${mes}`;
  
    return fechaFormateada
  };
  

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
            <p>{obtenerFechaActual()}</p>
            <p className="timenow">
              {hora}:{minutos}:{segundo}
            </p>
          </div>
        </span>
      </div>
      <span className="temp">{temp}º</span> {/**temeratura  */}
      {/* <div className="temp-scale">
        <span>Celcuis</span>
      </div> */}
      <WhatTemperature temp={temp} setTemperatura={setTemperatura} />
    </div>
  );
}
