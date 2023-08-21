import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Juegos">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Reseñas">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Consolas">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Accesorios">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer