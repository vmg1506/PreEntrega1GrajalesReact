const Description = (props) =>{
    return(
        <div className='cardDescription'>
            <h3 className='title'>
                {props.title}
            </h3>

            <div className='description'>
                <span className='descriptionTitle'>Descripcion: 
                    <p className='parrafo'>
                        {props.parrafo}
                    </p>
                </span>
            </div>

            <span className='cant'>
                cantidad: {props.cantidad}
            </span>

            <span className='precio'>
                ${props.precio}
            </span>
        </div>
    )
}

export default Description