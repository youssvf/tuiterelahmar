import { useState } from "react";
import TuitsPublicados from "./TuitsPublicados";
import TuitsUsuario from "./TuitsUsuario";

export default function ControlTuits({ usuario }) {

    const [pedirTuits,setPedirTuits] = useState(false);

    return (
        <>
            {usuario ? <TuitsUsuario usuario={usuario} setPedirTuits={setPedirTuits}    /> : ""}
            <TuitsPublicados pedirTuits={pedirTuits} setPedirTuits={setPedirTuits}/>
        </>
    );
}
