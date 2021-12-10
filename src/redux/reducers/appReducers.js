import { combineReducers } from "redux";
import { mensajes } from './mensajes';
import { styleMode } from './styleMode';
import { default as productos } from './productos';
const  reducers = combineReducers({
    mensajes,
    styleMode,
    productos
});
export default reducers;
