
import { Link } from "react-router-dom"
import logo from '../imagenes/logo_nav.png'

const Brand = () => {
    return(
        <Link to="/">
            <Link to="/" >
                <img src={ logo } alt="" />
            </Link>
        </Link>
    )
}

export default Brand;