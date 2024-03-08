import { useState } from "react"
import Registro from "./Registro";
import { URL_SERVER } from "../../constantes";

export default function Login({usuario,setUsuario}){
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [mostrarRegistro,setMostrarRegistro] = useState(false);

    const doLogin = (e) => {
        e.preventDefault();
        fetch(URL_SERVER+'usuarios?username_like=' + username)
        .then(res => res.json())
        .then(data => {
            if(data.length > 0){
                if(data[0].password === password){
                    setUsuario(data[0]);
                } else {
                    alert('Datos incorrectos');
                }
            } else {
                alert('Datos incorrectos');
            }
        })
        .catch(error => {console.error('Error: ', error)});
    }
    
    return (
        <>
            {mostrarRegistro ? <Registro setUsuario={setUsuario} setMostrarRegistro={setMostrarRegistro} /> : (
                <fieldset>
                    <legend>Inicia sesión en Y (Antiguo Tuiter)</legend>
                    <form onSubmit={doLogin}>
                        <label htmlFor="username">Nombre Usuario:</label>
                        <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <button type="submit">Iniciar Sesión</button>
                        <button onClick={(e) => {setMostrarRegistro(true)}}>Registrar Nuevo Usuario</button>
                    </form>
                </fieldset>
            )}
        </>
    )
}