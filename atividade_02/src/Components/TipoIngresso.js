function TipoIngresso(props){

    return(
    <div>
        <h2>{props.ingresso}</h2>
        <p><li>{props.ingresso1}: {props.preco1}</li></p>
        <p><li>{props.ingresso2}: {props.preco2}</li></p>
        <p><li>{props.ingresso3}: {props.preco3}</li></p>
        <p><li>{props.ingresso4}: {props.preco4}</li></p>
    </div>
    )


    
}

export default TipoIngresso