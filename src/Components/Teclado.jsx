import React, { useState } from 'react';
import logo from '../logo.svg'

function Teclado() {
    	
    let manejarTeclado = (event) => {
        if(event.charCode === 13) {
          alert("Se ha pulsado la tecla ENTER");
        }
    };

    let manejaEntraRaton = (event) => {
        console.log("Entra el ratón", event);
    };
      
    let manejaSaleRaton = (event) => {
        console.log("Sale el ratón", event);
    };
      
    let manejaClickRaton = (event) => {
        console.log(`El usuario pulsa en x: ${event.clientX}, y: ${event.clientY}`);
    };

    let manejarPulsacion = (event) => {
        console.log("El tipo de este evento es: ", event.type);
    }
    
    let cargaImagen = (event) => {
        console.log("La imagen se ha cargado correctamente");
    };
    
    let errorImagen = (event) => {
        console.log("Error al cargar la imagen");
    };
	
    let manejarFoco = (event) => {
        if(event.type === 'focus') console.log("El elemento tiene foco");
        if(event.type === 'blur') console.log("El elemento pierde el foco");
    };

    let handlerClipBoard = (event) => {
        let data = event.clipboardData.getData('Text');
        
        console.log(`Texto en el clipboard: ${data || "<Sin datos>"}`);
    };

    const [reactLogo, setReactLogo] = useState(logo);
    return (
        <div className="Teclado">
            <div>Pruebas de onKeyPress</div>
            <input placeholder="Se lanzará alerta" onKeyPress={manejarTeclado} />
            <input placeholder="No se lanzará alerta" />

            <div>Pruebas de eventos de mouse y onTouchStart</div>
            <button
                onMouseEnter={manejaEntraRaton} 
                onMouseLeave={manejaSaleRaton}
                onClick={manejaClickRaton}
                onTouchStart={manejarPulsacion}>
                Pruebas con Eventos de ratón
            </button>

            <div>Pruebas de eventos de imagen</div>
            <img width="256" src={reactLogo} onLoad={cargaImagen} onError={errorImagen} alt="reactLogo"/>
            <button onClick={() => {setReactLogo(logo)}}>Cargar correctamente el logo</button>
            <button onClick={() => {setReactLogo('')}}>Cargar con error el logo</button>
            
            <div>Pruebas de evento focus</div>
            <input type="text" onFocus={manejarFoco} onBlur={manejarFoco} />

            <div>Pruebas de evento clipboard</div>
            <input type="text" onPaste={handlerClipBoard} />
        </div>
    );
}

export default Teclado;