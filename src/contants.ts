// Importar los environments
import environments from "./environments";

// Función para todas las peticiones fetch
export const requestApp = async (props: _RequestProps) => {
    // Desestructurar las props
    const {data, isActiveLoading, method, target} = props;

    // Armar el endpoint a consumir
    const apiURL: string = `${environments.url}${target}`;

    // Mostrar Loading hasta obtener respuesta de la petición
    //isActiveLoading === undefined || null ? isActiveLoading(true) : undefined;

    // En caso de contar con Token, obtenerlo
    // const token: string = getToken();

    // Configurar Headers de la petición
    const headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');

    // Realizar la peticón
    const result: _ResponseApi<any> = await fetch(apiURL, {
        body: data !== undefined ? JSON.stringify(data) : undefined,
        headers: headers ? headers : undefined,
        method,
    }).then(async(response: Response) => {
        // Desactivar el loading
        // isActiveLoading === undefined ? Loading(false) : undefined;

        // Validar el status del response y responder según sea el caso
        console.log(JSON.stringify(response,null,4));
        
        switch (response.status) {
            case 200:
                try {
                    return {
                        data: await response.json(),
                        ok: response.ok,
                    }
                } catch (error) {
                    return {
                        data: undefined,
                        ok: response.ok,
                        error: !response.ok
                    }
                }
            default:
                return {
                    data: undefined,
                    ok: response.ok,
                    error: !response.ok
                }
        }
    }).catch(error => {
        console.log('Fetch Error = ', error);
        return {
            data: undefined,
            ok: false,
            error: true,
        }
    });

    // Retornar la respuesta del result
    return result;
};