import React from "react";
import Autonomia from "./Autonomia";
import Carga from "./Carga";

function PilasConvencionales() {
    return (
        <div>
            <h3>Pilas convencionales</h3>
            <p>
                A pesar del auge de las energías renovables,
                las pilas convencionales siguen utilizándose a diario.
            </p>
            <Autonomia km='Con este tipo de baterías no se puede' />
            <Carga carga='Este tipo de pilas no se pueden recargar' />
            <br/>
        </div>
    );
}

export default PilasConvencionales;