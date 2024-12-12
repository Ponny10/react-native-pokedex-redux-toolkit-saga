// Importar la función del request o la petición del Api
import {requestApp} from '../../contants';

// Función que retorna la peticón del Api
const getPokemons = ({limit, page}: _PokemonPagination) => {
    return requestApp({
        method: 'GET',
        target: `/pokemon?offset=${page * 15}&limit=${limit}`,
    });
};

const getPokemon = (path: string) => {
    const url: string = path.replace('https://pokeapi.co/api/v2', '');
    return requestApp({
        method: 'GET',
        target: url,
    });
};

// Exportar por default las funciones de respuesta del Api
export default {
    getPokemons,
    getPokemon,
};