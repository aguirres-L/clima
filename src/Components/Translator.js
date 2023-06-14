
import { useState } from "react";

export default function Translator(){
    const [idioma, setIdioma] = useState("es");
    const api_kay = "AIzaSyAShCKPc3Zer3JlW6Vn4P04xzxm6OgbAqM";

    const getTranslation = async () => {
        try {
          const URL = `https://translation.googleapis.com/language/translate/v2?key=${api_kay}&q=Hello%20world&source=en&target=${idioma}`;
          const res = await fetch(URL);
          let json = await res.json();
          console.log(json);
          // Procesa la respuesta de la API de traducción según tus necesidades
        } catch (error) {
          console.log('Error en getTranslation:', error);
        }
      }

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setIdioma(selectedValue)
        alert(`Seleccionaste ${selectedValue}`);
        getTranslation()
      };

    return(
        <div>
        <select value={idioma} onChange={handleOptionChange} >
          <option id="en" >EN</option>
          <option id="es" >ES</option>
        </select>
      </div>
    )
}