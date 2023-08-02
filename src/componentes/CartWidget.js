import REACT from 'react';
import '../hojas-de-estilo/CartWidget.scss'
import cart from '../imagenes/cart_icon.png'



function CartWidget() {
    return (
        <>
            <div className='contenedor-carrito'>
                <div className='contenedor-cart'>
                    <img src= { cart } alt="" />
                </div>
                <div className='contenedor-notificacion'>
                    <p>1</p>
                </div>
            </div>
        
        
        
        
        </>
    );
}

export default CartWidget;