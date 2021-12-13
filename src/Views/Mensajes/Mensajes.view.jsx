import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  borrarMensaje,
  crearMensaje,
  leerMensaje,
  vaciarMensajes,
} from "../../redux/actions/mensajes.js";
import { iniciarSesion, cerrarSesion } from "../../redux/actions/sesion.js";
import MensajesHeader from "../../Components/MensajesHeader/MensajesHeader.jsx";
import MensajesTable from "../../Components/MensajesTable/MensajesTable.jsx";
import "./Mensajes.view.scss";

function Mensajes() {
  const mensajes = useSelector((state) => state).mensajes;
  const sesion = useSelector((state) => state).sesion;
  const dispatch = useDispatch();

  let crear = ({ nombre, email, descripcion }) => {
    let nuevo = {
      nombre: nombre,
      email: email,
      descripcion: descripcion,
      leido: false,
    };

    dispatch(crearMensaje(nuevo));
  };
  let vaciar = () => {
    dispatch(vaciarMensajes());
  };
  let eliminar = (index) => {
    dispatch(borrarMensaje(index));
  };
  let leer = (index) => {
    dispatch(leerMensaje(index));
  };
  let iniciar = () => {
    dispatch(iniciarSesion({}));
  };
  let cerrar = () => {
    dispatch(cerrarSesion());
  };

  return (
    <div className="sessionContainer">
      {sesion ? (
        <button type="button" onClick={cerrar}>
          Cerrar sesión
        </button>
      ) : (
        <button type="button" onClick={iniciar}>
          Iniciar sesión
        </button>
      )}
      {sesion && (
        <div className="mensajes">
          <MensajesHeader clickNuevo={crear} vaciar={vaciar} />
          <MensajesTable
            mensajes={mensajes}
            clickEliminarUno={eliminar}
            clickMarcarLeido={leer}
          />
        </div>
      )}
    </div>
  );
}

export default Mensajes;
