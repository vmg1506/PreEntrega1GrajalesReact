import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hojas-de-estilo/NavBar.scss';
import './hojas-de-estilo/ItemListContainer.scss';
import './componentes/NavBar';
import './componentes/ItemListContainer';
import './componentes/Footer';
import NavBar from './componentes/NavBar';
import CardItem from './componentes/CardItem';
import DetailsItem from './componentes/DetailsItem';
import ContainerCardItems from './componentes/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerCardItems /> } />
        <Route path='/item/idItem' element={ <DetailsItem /> } />
        <Route path='/category/:idCategory' element={ <ContainerCardItems /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//<div className="App">
     //   <NavBar />
       // <ContainerCardItems />
        //{/* <ItemListContainer texto = "Bienvenidos, Sitio en construccion" /> */}
   // </div>