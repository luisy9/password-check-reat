import { useState } from "react";
import Buttons from "./components/Buttons"
import Confirmar from "./components/Confirmar";
import PASSWORD from "./utils/PASSWORD";

export const App = () => {
  const passwordDefault = PASSWORD.map(e => 0);
  const [pass, setPass] = useState(passwordDefault);

  function setValuesClicked(index) {
    const mapPasswordChange = pass.map((e, i) => index === i
      ? !e * 1 : e);
    setPass(mapPasswordChange)
  }

  function checkPassword() {
    const filterArray = pass.filter((num, index) => num === PASSWORD[index]);
    return PASSWORD.every((e, index) => e === filterArray[index]);
  }

  return (
    <div>
      <h1 className="text-center p-10">Adivinar Contraseña</h1>
      <Buttons setValuesClicked={setValuesClicked} pass={pass} />
      <div className="flex justify-center pt-20">
        <Confirmar checkPassword={checkPassword} />
        {
          checkPassword() === true ? 'Correcto' : 'Incorrecto'
        }
      </div>
    </div>
  )
}

export default App
