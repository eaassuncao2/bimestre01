import logo from './logo.svg';
import './App.css';
import Eventos from './Components/Eventos';
import TipoIngresso from './Components/TipoIngresso';
function App() {
  return (
    <div className="App">
      <Eventos
      nome="GUSTAVO LIMA" 
      data="2 de agosto de 2019 (Sexta Feira)"
      hora="18h30- 00h00"
      local="Parque do Povo"
      cidade="Campina Grande/PR"
      genero="Artes em forma de SERTANEJO"
      />
      <TipoIngresso 
      ingresso="Ingressos"
      ingresso1="Camarote (open bar)"
      preco1="R$150,00"
      ingresso2="Camarote"
      preco2="R$100,00"
      ingresso3="Front-stage"
      preco3="R$60,00"
      ingresso4="Pista"
      preco4="R$30,00"
      />
    </div>
  );
}

export default App;