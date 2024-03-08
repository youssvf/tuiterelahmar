import { useEffect, useState } from "react"
import { URL_SERVER } from "../../constantes";

export default function TuitsUsuario({usuario,setPedirTuits}){
    
    const [texto,setTexto] = useState('');
    const [tuitsUsuario,setTuitsUsuario] = useState([]);

    const tuitear = (e) => {
        e.preventDefault();
        
        const tuit = {
            usuario: usuario.username,
            texto,
            fecha_publicacion: new Date(Date.now()).toLocaleDateString()
        }

        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(tuit),
        }

        fetch(URL_SERVER+'tuits',options)
        .then(res => {
            if(res.ok){
                alert('Tuiteado!');
                setPedirTuits(true);
            }
        })
        .catch(error => {console.error('Error: ', error)})
    }


    const borrarTuit = (id) => {
        fetch(URL_SERVER + 'tuits/' + id, {
            method:'DELETE'
        })
        .then(res => {
            if(res.ok){
                alert('Tuit eliminado!');
                setPedirTuits(true);
            }
        })
        .catch(error => {console.error('Error: ', error)})
    }

    useEffect(() => {
        fetch(URL_SERVER + 'tuits?usuario='+ usuario.username)
        .then(res => res.json())
        .then(data => setTuitsUsuario(data))
        .catch(error => {console.error('Error: ', error)})
    });

    const tuits = tuitsUsuario.map(tuit => (
        <li key={tuit.id}>
            Texto: {tuit.texto}, Fecha Publicación: {tuit.fecha_publicacion} <button onClick={() => {borrarTuit(tuit.id)}}>Borrar tuit</button>
        </li>
    ))
    
    return (
        <>
            <fieldset>
                <legend>Tuits: {usuario.username}</legend>
                <form onSubmit={tuitear}>
                    <label htmlFor="texto">Texto:</label>
                    <input type="text" name="texto" value={texto} onChange={(e) => {setTexto(e.target.value)}}/>
                    <button type="submit">Tuitear</button>
                </form>
                <ul>{tuits}</ul>
            </fieldset>
        </>
    )
}