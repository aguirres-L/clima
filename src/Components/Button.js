import React, { useEffect, useState } from "react";

export default function Button({ setUbi }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  //const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);

        setLongitude(position.coords.longitude);

        // Aquí puedes hacer uso de las coordenadas obtenidas
      },
      (error) => {
        console.error("Error al obtener la ubicación:", error);
      }
    );
  }, []);

  const ubiNavigation = async () => {
    const API = "85c9041f55250cd9da4599f60cc500f3";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}`;

    let res = await fetch(url);
    let json = await res.json();
    //console.log(json);
    alert("gps");

    setUbi(json.name);
  };

  return (
    <button onClick={ubiNavigation}>
      <svg
        
        fill="white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
      </svg>
      Ubicación
    </button>
  );
}
