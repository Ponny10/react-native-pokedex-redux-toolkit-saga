// Importaciones de redux toolkit 
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Initcializar estado de pokemones
const initialState: _PokemonState = {
    pokemon: [],
}

// Declara el Slice y reducers
export const pokemonsSlice = createSlice({
    initialState,
    name: 'pokemons',
    reducers: {
        // Función o disparador que ejecuta el Saga para la petición
        getPokemons: (state: _PokemonState, action: PayloadAction<_PokemonPagination>): void => undefined,
        // Función que setea el valor que regresa la petición del Saga
        setPokemons: (state: _PokemonState, action: PayloadAction<_Pokemon[]>) => ({
            ...state,
            pokemon: action.payload.map((pokemon: _Pokemon): _Pokemon => <_Pokemon>({
                count: pokemon.count,
                image: pokemon.image,
                name: pokemon.name,
                next: pokemon.next,
                previous: pokemon.previous,
            }))
        }),
        // Función o disparador que resetea los valores por default
        resetPokemons: () => initialState,
    },
});

// Exportar las actions del Slice
export const actionTypes = pokemonsSlice.actions;

// Exportar por default el reducer
export default pokemonsSlice.reducer;