import { useEffect, useState } from "react";

import Translator from "./Translator";
import ContainerInput from "./ContainerInput";
import Card from "./Card";
import Error from "./Error";
import Button from "./Button";

import cbaImage from "../img/cba.jpg";

export default function Main() {
  const [temperatura, setTemperatura] = useState(false);
  const [ubi, setUbi] = useState("argentina");
  const [error, setError] = useState(false);
  const [capital, setCapital] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();
  const apiKey = "XQCIAKV07QZE";
  const [horaBusquedad, setHoraBusquedad] = useState();

  const [traductor, setTraductor] = useState(null);

  const [cielo, setCielo] = useState(null);
  
  useEffect(() => {
    const getUbication = async () => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ubi}&appid=85c9041f55250cd9da4599f60cc500f3&units=metric`;
        const response = await fetch(URL);

        if (!response.ok)
          throw "get-ubication-error"; /*ver porque sale este erro  */

        const json = await response.json();
       // console.log(json.weather[0].id);

        const long = json?.coord?.lon;
        const lat = json?.coord?.lat;

        const codeCielo = json?.weather[0]?.id;


        const temperature = json?.main?.temp?.toString().slice(0, 2) || "";
        const capitalName = json.name || "";

        setLongitud(long);
        setLatitud(lat);

        setCielo(codeCielo)

        setTemperatura(temperature);
        setCapital(capitalName);
        console.log(cielo);
        
      } catch (error) {
        console.log("Error on getUbication: ", error);
      }
    };

    const getBackgroundImage = async () => {
      try {
        const URL = `https://api.unsplash.com/search/photos?query=${ubi}&client_id=mCYzrehNjfreR-RLNGzBiuyVb13vMvR9LrcegdfIP8E`;

        const response = await fetch(URL);

        const json = await response.json();

        const newBackgroundImage =
          json.results[0]?.links?.download || ""; /** ? */

        setBackgroundImage(newBackgroundImage);
      } catch (error) {
        console.log("Error on getBackgroundImage: ", error);
      }
    };

    const horaBusquedad = async () => {
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitud}&lng=${longitud}`
      )
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          const currentTime = data.formatted.split(" ")[1];
          setHoraBusquedad(currentTime);
          console.log(` ${currentTime} ---${ubi}`);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    };

    getUbication();
    getBackgroundImage();
    horaBusquedad();
  }, [ubi]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : cbaImage,
      }}
    >
      <Translator setTraductor={setTraductor} />

      <ContainerInput setError={setError} setUbi={setUbi} />

      {error ? <Error ubi={ubi} /> : ""}

      {error ? (
        ""
      ) : (
        <Card
          ubi={ubi}
          setTemperatura={setTemperatura}
          name={capital}
          temp={temperatura ? temperatura : "0"}
          traductor={traductor}
          horaBusquedad={horaBusquedad}
          cielo={cielo}
        />
      )}

      <Button traductor={traductor} setUbi={setUbi} />
    </div>
  );
}
