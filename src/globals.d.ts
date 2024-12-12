// Interfas para el tipado de las props que se envía a las peticiones
interface _RequestProps {
    token?: string;
    target: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    data?: object;
    isActiveLoading?: boolean;
    signature?: string;
}

// Interfaz para el tipado de respuesta de las peticiones
interface _ResponseApi<T = null> {
    data: T;
    error?: boolean;
    ok: boolean;
    message?: string;
    status?: number;
}

// Root de interfaces en el App
interface _RootState {
    pokemons: _PokemonState,
}