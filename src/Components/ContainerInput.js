import { useState } from "react";

export default function ContainerInput({ setUbi,setError }) {
  const [lugar, setLugar] = useState(null);

  //------------------------------------
  const handleInput = (e) => {
    //console.log(e.target.value);
    setLugar(e.target.value);
    setError(false)
  };

  const onClickInput = () => {
    setUbi(lugar);
  };
  // Puedo capturar la ubi que el user necesite
  //------------------------------------

  return (
    <div className="containerInput">
      <input onChange={handleInput} type="text" className="input-clima" />
      <input onClick={onClickInput} type="submit" value="🔎" />
    </div>
  );
}
