import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hojas-de-estilo/Header.scss';
import './hojas-de-estilo/Main.scss';
import './componentes/Header';
import './componentes/Main';
import './componentes/Footer';
import Header from './componentes/Header';
import Main from './componentes/Main';


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
