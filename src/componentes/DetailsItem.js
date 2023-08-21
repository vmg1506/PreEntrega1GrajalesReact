import Image from "./Image";
import Description from "./Description";
import "../hojas-de-estilo/detailItem.scss";
import fetchSimultion from "../componentes/fetchSimulation";
import productos from "../componentes/productos";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonDetalles from "./ButtonDetalles";


const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                 
                datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={datos[0].imageProduct.firstImage}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {datos[0].title}
                                    parrafo= {datos[0].descripcion}
                                    cantidad = {datos[0].stock}
                                    precio={datos[0].price}
                                />
                                
                            <div className="buttons">
                        
                                    <ButtonDetalles 
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailsItem;
       