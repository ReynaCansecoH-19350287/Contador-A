import { useState } from "react";

function App() {
  //let Contador = 0;
  const [Contador, setContador] = useState(0)

  return (
    <div>
      <h3>Contador</h3>
      <hr />
      <h1>{Contador}</h1>
      <button 
      onClick={()=> {
        setContador(Contador + 1);
        console.log(Contador)
      }}
      type="button" 
      className="btn btn-primary"
      >+1</button>
    </div>
  )
}

export default App
