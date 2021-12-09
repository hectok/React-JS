import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers/mensajes';
import { sesion } from './reducers/sesion';
import { productos } from './reducers/productos';
let reducers = combineReducers({
    mensajes: mensajes,
    sesion: sesion,
    productos: productos
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;