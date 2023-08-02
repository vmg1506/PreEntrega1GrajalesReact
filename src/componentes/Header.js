import REACT from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import logo from '../imagenes/logo_nav.png';



function Header() {
    return (
        <>
            <nav className=" barra navbar navbar-expand-lg">
                <div className="container-fluid">
                  <img src= { logo } alt="" />
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
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