import { useState } from "react"
import { URL_SERVER } from "../../constantes";

export default function Registro({setUsuario, usuario,setMostrarRegistro}){
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [nombre,setNombre] = useState('');
    const [apellidos,setApellidos] = useState('');
    const [email,setEmail] = useState('');


    const doRegistro = (e) => {
        e.preventDefault();
        const usuario = {
            nombre,
            apellidos,
            username,
            email,
            password,
            repetirPassword
        }

        const options = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(usuario),
        }

        fetch(URL_SERVER+'usuarios',options)
        .then(res => {
            if(res.ok){
                alert('Usuario registrado con éxito!');
                setUsuario(usuario);
            }
        })
        .catch(error => {console.error('Error: ', error)})
    }
    
    return(
        <>
            <fieldset>
                <legend>Datos nuevo usuario</legend>
                <form onSubmit={doRegistro}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input type="text" name="apellidos" value={apellidos} onChange={(e) => {setApellidos(e.target.value)}} />
                    <label htmlFor="usuario">Usuario:</label>
                    <input type="text" name="usuario" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input type="password" name="contraseña" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <label htmlFor="contraseñarepe" >Repetir Password</label>
                    <input type="password" name="contraseñarepe" value={repetirPassword} onChange={(e) => {setRepetirPassword(e.target.value)}}/>
                    <button type="submit">Registrar Usuario</button>
                    <button onClick={(e) => {setMostrarRegistro(false)}}>Volver a inicio de sesión</button>
                </form>
            </fieldset>
        </>
    )
}