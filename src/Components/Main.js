import { useEffect, useState } from "react";

import ContainerInput from "./ContainerInput";
import Card from "./Card";
import Error from "./Error";
import Button from "./Button";

import cbaImage from '../img/cba.jpg';

export default function Main() {
  const [temperatura, setTemperatura] = useState(false);
  const [ubi, setUbi] = useState("argentina");

  const [error, setError] = useState(false);
  const [capital, setCapital] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const getUbication = async () => {
      try {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ubi}&appid=85c9041f55250cd9da4599f60cc500f3&units=metric`
        const response = await fetch(URL);

        if (!response.ok) throw 'get-ubication-error';

        const json = await response.json();

        const temperature = json?.main?.temp?.toString().slice(0, 2) || '';
        const capitalName = json.name || '';

        setTemperatura(temperature);
        setCapital(capitalName);
      }
      catch (error) {
        console.log('Error on getUbication: ', error);
      }
    }

    const getBackgroundImage = async () => {
      try {
        const URL = `https://api.unsplash.com/search/photos?query=${ubi}&client_id=mCYzrehNjfreR-RLNGzBiuyVb13vMvR9LrcegdfIP8E`

        const response = await fetch(URL)

        const json = await response.json();

        const newBackgroundImage = json.results[0]?.links?.download || '';

        setBackgroundImage(newBackgroundImage);
      }
      catch (error) {
        console.log('Error on getBackgroundImage: ', error)
      }
    }

    getUbication()
    getBackgroundImage()
  }, [ubi]);

  return (
    <div className="app" style={{backgroundImage: backgroundImage ? `url(${backgroundImage})` : cbaImage}}>
      <ContainerInput setError={setError} setUbi={setUbi} />

      {error ? <Error ubi={ubi}/> :""}
      
      {error? "" :<Card ubi={ubi} name={capital} temp={temperatura?temperatura:"0"} />}

    <Button setUbi={setUbi} />
    </div>
  );
}
