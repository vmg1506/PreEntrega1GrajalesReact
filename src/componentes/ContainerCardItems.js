import CardItem from "./CardItem"
import fetchSimulation from "./fetchSimulation"
import productos from '../componentes/productos'
import '../hojas-de-estilo/containerCardItems.scss'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" 

const ContainerCardItems = () =>{
    
    const [datos, setDatos] = useState( [] )
    const { idCategory } = useParams();

    useEffect(() => {
        if(idCategory == undefined){
            fetchSimulation(productos, 3000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        }else{
            fetchSimulation(productos.filter(filter => filter.type == idCategory), 3000)
                .then(resp => setDatos(resp))
                .catch(error => console.log(error))
        }
    }, [idCategory])

    
    return(
        <>
            <div className="containerCardItems">
                {
                    datos.map(productos => (
                        <CardItem
                            key={productos.id}
                            id={productos.id}
                            imagen={productos.imageProduct.firstImage}
                            title={productos.title}
                            cantidad={productos.stock}
                            precio={productos.price}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default ContainerCardItems