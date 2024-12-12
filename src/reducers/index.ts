// En el archivo barril importamos y exportamos los reducers y actions

//importar
// A las actions le aplicamos un alias para una mejor lectura de instancia
import pokemons, {actionTypes as actionsPokemons} from "./pokemons";

// Concentramos en una variable las actions para exportar
export const actionsReducer = {
    pokemons: actionsPokemons,
};

// Exportamos por default los Slice
export default {
    pokemons,
};
