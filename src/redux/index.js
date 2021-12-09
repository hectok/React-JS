import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/appReducers';
import productSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState) {
    const middleware = [sagaMiddleware];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
       
    sagaMiddleware.run(productSaga);
       
    return store;
}
