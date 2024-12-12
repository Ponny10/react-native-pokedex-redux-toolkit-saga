// Import redux-saga
import createSagaMiddleware from 'redux-saga';

// Importar redux toolkit
import {combineReducers, configureStore} from '@reduxjs/toolkit';

// Importar Sagas de los middlewares
import Sagas from './middlewares';

// Import Reducers
import Reducers from './reducers';

// Crear middleware saga
const sagaMiddleware = createSagaMiddleware();

// Configurar el Store
const store = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        thunk: false,
    }).concat(sagaMiddleware),
    reducer: combineReducers(Reducers),
});

// Ejecutar sagaMiddleware
sagaMiddleware.run(Sagas);

// Export por default el store
export default store;