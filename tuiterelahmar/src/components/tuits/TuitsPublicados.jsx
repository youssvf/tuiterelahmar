import { useEffect, useState } from "react"
import { URL_SERVER } from "../../constantes";

export default function TuitsPublicados ({pedirTuits}){
    
    const [tuitsPublicados,setTuitsPublicados] = useState([]);
    const [filterText,setFilterText] = useState('');
    

    useEffect(() => {
        fetch(URL_SERVER + 'tuits?texto_like='+ filterText)
        .then(res => res.json())
        .then(data => setTuitsPublicados(data))
        .catch(error => {console.error('Error: ', error)})
    },[filterText,pedirTuits]);

    const tuits = tuitsPublicados.map(tuit => (
        <li key={tuit.id}>
            Texto: {tuit.texto}, Usuario: {tuit.usuario}, Fecha Publicación: {tuit.fecha_publicacion} <button>Seguir</button>
        </li>
    ))

    return (
        <>
        <fieldset>
            <legend>Trending Topics</legend>
            <input type="text" placeholder="Busca tuits" value={filterText} onChange={(e) => {setFilterText(e.target.value)}}/>
            <ul>{tuits}</ul>
        </fieldset>
        </>
    )
}