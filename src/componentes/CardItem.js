import Image from './Image'
import Description from './Description'
import ButtonDetalles from './ButtonDetalles'
import ButtonAddCart from './ButtonAddCart'
import '../hojas-de-estilo/cardItems.scss'
import ImgPrueba from '../imagenes/prueba.jpg'

const CardItem = (props) =>{
    return(
        <div className="cardItem">
            <Image imagen={props.imagen}/>
            <Description 
                title={props.title}
                cantidad = {props.cantidad}
                precio= {props.precio}/>
                
            <div className='buttons'>
                <ButtonDetalles />
                <ButtonAddCart />
            </div>
        </div>
    )
}
export default CardItem