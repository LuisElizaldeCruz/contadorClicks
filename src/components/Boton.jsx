import React from "react";


const Boton =({texto, esBotonDeClick, manejarClic})=>{
    return(
        <button
        className={ esBotonDeClick ? "boton-clic" : "boton-reiniciar" }
        onClick={manejarClic}>
        {texto}
        </button>
    );
}

export default Boton;