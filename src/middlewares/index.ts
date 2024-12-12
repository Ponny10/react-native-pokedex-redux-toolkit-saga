// Importar redux-saga
import {takeLatest, fork} from 'redux-saga/effects';

// Importar los reducers y asignarle un alias para mejor lectura de código
import {actionsReducer as actions} from '../reducers';

// Importar los sagas
import * as pokemons from './pokemons';

// Función de sagas Pokemons
function* PokemonsSagas() {
    // yield takeLates permite ejecutar asincrono cada petición
    yield takeLatest(actions.pokemons.getPokemons.type, pokemons.getPokemons);
};

// Exportar por default los sagas
export default function* startSagas() {
    yield fork(PokemonsSagas);
}