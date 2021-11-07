import React, { useState } from 'react';

function Teclado() {
    const [texto, setTexto] = useState('');
    const [keyPress, setKeyPress] = useState('');
    
    let manejarPulsacionesTeclado = (event) => {
        setTexto(event.target.value);
        setKeyPress(event.charCode);
    };

    let manejarDown = (event) => {
        
        if(event.keyCode === 8){
            setTexto(texto.slice(0,-1));
            setKeyPress(event.charCode);
        }
    };
    return (
        <div className="Teclado">
            <div>Ejercicio 1</div>
            {/* Al usar el evento keyPress el texto siempre se mostrará 1 caracter después */}
            <input 
                placeholder="Pulse una tecla" 
                onKeyPress={manejarPulsacionesTeclado}
                onKeyDown={manejarDown} 
                />
            <div>El texto introducido es : {texto}</div>
            <div>La teclada pulsadas es : {keyPress}</div>
        </div>
    );
}

export default Teclado;