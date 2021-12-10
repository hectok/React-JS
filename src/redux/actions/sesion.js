export const iniciarSesion = (index) => {
    return {
        type: SESION_MENSAJES.INICIAR,
        payload: index
    }
}

export const cerrarSesion = (msg) => {
    return {
        type: SESION_MENSAJES.CERRAR,
        payload: msg
    }
}

export const getSession = (index) => {
    return {
        type: SESION_MENSAJES.LEER,
        payload: index
    }
}

export const SESION_MENSAJES = {
    INICIAR: "INICIAR_SESION",
    CERRAR: "CERRAR_SESION",
    LEER: "LEER_SESION"
}