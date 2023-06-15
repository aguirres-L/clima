import { useEffect, useState } from "react";
import WhatTemperature from "./WhatTemperature";

export default function Card({
  temp,
  ubi,
  name,
  setTemperatura,
  traductor,
  horaBusquedad,
  cielo
}) {
  // tratar de modificar el valor de los span determinando si esta nublado o solodado , ya que la api me da esa informacion

  //console.log(traductor);
  const [hora, setHora] = useState();
  const [minutos, setMinutos] = useState();
  const [segundo, setSegundo] = useState();
  
  const isDark = horaBusquedad ? horaBusquedad.substring(0,2) :"18";
  
  const obtenerFechaActual = () => {
    const diasSemana = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const dayTheWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const months = [
      "januray",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];

    let semana;
    let month;

    {
      !traductor ? (semana = diasSemana) : (semana = dayTheWeek);
    }
    {
      !traductor ? (month = meses) : (month = months);
    }

    const fecha = new Date();

    const diaSemana = semana[fecha.getDay()]; // genro un for para poder obtnere la fecha justa?  tendria que intentadr hacer un condicional para poder alternar entre idiomas desde el modulo "translator"
    const dia = fecha.getDate();
    const mes = month[fecha.getMonth()]; // genro un for para poder obtnere la fecha justa?    tendria que intentadr hacer un condicional para poder alternar entre idiomas desde el modulo "translator"

    const fechaFormateada = `${diaSemana} ${dia} de ${mes}`,
      fechaFormateadaENG = `${diaSemana} ${dia} , ${mes}`;

    return !traductor ? fechaFormateada : fechaFormateadaENG;
  };

  /** poderia podern  le hora del lugar que se busque ejemplo "hora españa " */

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
      
        <div className={`cloud front ${cielo ===800 ?"hidden":""}`} >
          <span className="left-front"></span>
          <span className="right-front"></span>
        </div>
        <span className="sun sunshine"></span>
        <span className={`sun ${(isDark >= 21 || isDark <=8 ? "moon" : "") }` }></span>

        <div className="cloud back"  >
          <span className="left-back"></span>
          <span className="right-back"></span>
        </div>
      </div>
      <div className="card-header">
        <span>{ubi ? name : ""}</span>
        <span>{horaBusquedad ? horaBusquedad + " " + ubi : ""}</span>
        <span>
        <hr  style={{width:"35%"}} />
          
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
