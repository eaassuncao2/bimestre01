import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

function App() {

  const [resultado, setResultado] = useState(0);
  const [numero, setNumero] = useState(0);



  return (
    <div className="App">
      
      <h1>Atividade 03</h1>
      <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)}/>

      <p/>

      <button onClick={Somar}>Somar</button>
      <button onClick={Dim}>Subtrair</button>
      <button onClick={Zerar}>Reset</button>

      <p/>

      <h1>{resultado}</h1>

    </div>
  );


  function Somar(){
    setResultado(parseInt(resultado) + parseInt(numero));
  }
  function Dim(){
    setResultado(resultado - numero);
  }
  function Zerar(){
    setResultado(0);
  }
}

export default App;