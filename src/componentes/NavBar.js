import REACT from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import logo from '../imagenes/logo_nav.png';
import ItemListContainer from './ItemListContainer'
import { Link } from 'react-router-dom'; 
import Brand from './Brand';



function Header() {
    return (
        <>
            <nav className=" barra navbar navbar-expand-lg">
                <div className="container-fluid">
                      <Brand />
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <ItemListContainer
                          itemUno = "Juegos"
                          itemDos = "Reseñas"
                          itemTres = "Consolas"
                          itemCuatro = "Accesorios"
                        />
                      </li>
                      <li>
                        <CartWidget />
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
          <div className='contenedor-fondo'>
            
          </div>

        </>

    );
}

export default Header;