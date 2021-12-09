import { combineReducers } from "redux";
import { mensajes } from './mensajes';
import { sesion } from './sesion';
import { default as productos } from './productos';
const  reducers = combineReducers({
    mensajes,
    sesion,
    productos
});
export default reducers;
