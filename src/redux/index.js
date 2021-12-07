import { createStore, combineReducers } from 'redux';
import { mensajes } from './reducers/mensajes';
import { sesion } from './reducers/sesion';

let reducers = combineReducers({
    mensajes: mensajes,
    sesion: sesion
});

let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;