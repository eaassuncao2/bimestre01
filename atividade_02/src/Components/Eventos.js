function Eventos(props){

    return(
    <div>
        <h1>{props.nome}</h1>
        <p><b>Data:</b> {props.data}</p>
        <p><b>Horario:</b> {props.hora}</p>
        <p><b>local:</b> {props.local}</p>
        <p><b>Cidade:</b> {props.cidade}</p>
        <p><b>Gênero:</b> {props.genero}</p>
    </div>
    )


    
}

export default Eventos