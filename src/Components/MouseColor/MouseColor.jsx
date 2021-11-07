import { findAllByDisplayValue } from '@testing-library/dom';
import React, { useState } from 'react';
import './MouseColor.css';

function MouseColor() {
    const [color, setColor] = useState('');
    const [bkpColor, setBackupColor] = useState('');
    const [stopped, stopColor] = useState('');

    let randomColor = () => {return '#'+Math.floor(Math.random()*16777215).toString(16);}

    let capturarRaton = (event) => {
        if(event.target === event.currentTarget)setColor(randomColor());
    };
    
    let setNewColor = (event) => {
        if(!stopped){
            setBackupColor(color);
            setColor(randomColor());
        }
    };

    let setLastColor = (event) => {
        if(!stopped){
            setColor(bkpColor);
        }
    };

    let setStopColor = (event) => {
        stopColor(!stopped);
    };

    return (
        <>
            <div className="headerTittle">Ejercicio 2</div>
            {/* Para testear la tarea (y no volvernos locos) hemos cambiado en onMouseMove por el onClick */}
            {/* <div style={{backgroundColor:color}} className="mouseColor" onMouseMove={capturarRaton} > */}
            <div style={{backgroundColor:color}} className="mouseColor" onClick={capturarRaton} >
                <div className={"mouseColorChild"} onMouseEnter={setNewColor} onMouseLeave={setLastColor} onDoubleClick={setStopColor}></div>
            </div>
        </>
    );
}

export default MouseColor;
