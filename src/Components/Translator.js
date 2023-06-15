
import "./Csss/Translator.Css"

export default function Translator({ setTraductor }) {

  const handleOptionChange = (event) => {
    console.log(event.target.value);

    if (event.target.value === "ES") {
      console.log(`Traducir a Español`);
      setTraductor(null);
    }

    if (event.target.value === "EN") {
      console.log(`Traducir a Ingles`);
      setTraductor(true);
    }
  };

  return (
    <div  > 
      <select  
      style={{border:".1px white solid ",background: "rgb(17, 21, 19,0.3)",color:"white",borderRadius:"5px",boxShadow:"0px 0px 10px black"}} 
      
      onChange={handleOptionChange}>
        <option id="en">ES</option>

        <option id="es">EN</option>
      </select>
    </div>
  );
}
