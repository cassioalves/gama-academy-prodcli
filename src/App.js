import logo from './logo.svg';
import './App.css';
import Produtos from './components/produtos/Produtos'
import Clientes from './components/clientes/Clientes'

function App() {
  return (
    <>
    <div className="App">
      <div className="principal">
        <div className="texto">
          <h1>Gestão de Produtos x Clientes</h1>
        </div>
        <div className="conteudo">
          <div className="produtos">
            <Produtos></Produtos>
          </div>
          <div className="clientes">
            <Clientes></Clientes>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
