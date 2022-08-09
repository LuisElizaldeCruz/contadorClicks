import './App.css';
import logo from "./assets/imagenes/stock-photo-cup.jpeg";
import Boton from './components/Boton';

function App() {
  const manejarClic = () => {
    console.log("clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar")  
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo-imagen"
          src={logo}
          alt="Log de la pagina" />
      </div>

      <div className="contenedor-principal">
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
