import React from "react";
import Autonomia from "./Autonomia";
import Carga from "./Carga";

function BateriasLitio() {
    return (
        <div>
            <h3>Baterías eléctricas</h3>
            <p>
                Gracias a las nuevas tecnologías que afectan a las baterías,
                la autonomía de los coches eléctricos está aumentando a pasos agigantados.
            </p>
            <Autonomia km='400km' />
            <Carga carga='60min' />
            <br/>
        </div>
    );
}

export default BateriasLitio;