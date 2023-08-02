import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hojas-de-estilo/NavBar.scss';
import './hojas-de-estilo/ItemListContainer.scss';
import './componentes/NavBar';
import './componentes/ItemListContainer';
import './componentes/Footer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;
