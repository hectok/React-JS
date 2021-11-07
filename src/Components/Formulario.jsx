import React, { useState } from 'react';

function Formulario() {
    	
    const nombreRef = React.createRef();
    const apellidosRef = React.createRef();
    const [resultado, setResultado] = useState('');

    const manejarPulsacion = (event) => {
        setResultado(`${nombreRef.current.value} ${apellidosRef.current.value}`);
      }
     
      return (
        <div className="form">
            <header className="header-form">
                <h1>Formulario en React</h1>
                
                <input
                    placeholder="Introduce tu nombre"
                    ref={nombreRef}/>
                <input
                    placeholder="Introduce tus apellidos"
                    ref={apellidosRef}/>

                <button onClick={manejarPulsacion}>Mostrar datos</button>
            
                <strong>{resultado}</strong>
            </header>
        </div>
    );
}

export default Formulario;