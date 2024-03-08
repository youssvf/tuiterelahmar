import Login from "./Login";

export default function ControlUsuario({usuario,setUsuario}){
    

    return (
        <>
            {usuario ? (
                <div>
                    <p>Bienvenido {usuario.nombre} <button onClick={(e) => setUsuario(null)}>Cerrar sesión</button></p>
                </div>
                
            ): <Login setUsuario={setUsuario}/>}
        </>
    )
}