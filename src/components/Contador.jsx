import React from "react";
import "../assets/css/Contador.css";

const Contador =({ numClics })=>{
    return(
        <div className="contador">
        {numClics}
        </div>
    );
};

export default Contador;