// Importar redux-saga
import { call, put } from 'redux-saga/effects';

// Importar los reducers y asignar alias para una mejor lectura de código
import { actionsReducer as actions } from '../../reducers';

// Importar los request
import Request from './request';
import { PayloadAction } from '@reduxjs/toolkit';

// Función para solicitar los pokemons al Api
export function* getPokemons({payload}: PayloadAction<_PokemonPagination>) {
    // Es recomendable utlizar try / catch para prevenir cualquier fallo en la petición
    try {
        // Desestructurar las props
        const {limit, page} = payload;

        // Realizar la peticón al API y almacenar la respuesta
        const responsePokemons: _ResponseApi<_PokemonsApiResult> = yield call(Request.getPokemons, { limit, page });

        // Obtener los paths de los pokemons
        const pathPokemon = responsePokemons.data.results.map((pokemon: _PokemonApiResult) => pokemon);

        // Array que almacenará las respuestas de cada pokemon
        let res: _Pokemon[] = [];

        // Realizar las propiedades de cada Pokemon
        for (const pokemon of pathPokemon) {
            const responsePokemon: _ResponseApi<_PokemonApi> = yield call(Request.getPokemon, pokemon.url);
            if (responsePokemon.ok) {
                const response: _Pokemon = {
                    count: responsePokemons.data.count,
                    next: responsePokemons.data.next,
                    previous: responsePokemons.data.previous,
                    name: pokemon.name,
                    image: responsePokemon.data.sprites.other?.['official-artwork'].front_default,
                }
                res.push(response);
            }
        }

        // Setear los valores al reducer de pokemons
        yield put(actions.pokemons.setPokemons(res));
    } catch (error) {
        console.log('Error en la petición: ', JSON.stringify(error));
    }
};