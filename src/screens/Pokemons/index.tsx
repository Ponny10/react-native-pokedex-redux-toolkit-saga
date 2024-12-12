import React, {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

// Importar los reducer
import {actionsReducer} from '../../reducers';

// Importar selectores de react-redux
import {useDispatch, useSelector} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const Pokemons = () => {
    // Acceder al valor del state
    const {pokemon} = useSelector((state: _RootState) => state.pokemons);

    // Constante para realizar acciones
    const dispatch = useDispatch();

    // Hook de navegación
    const navigation = useNavigation<any>();

    // Funciones para realizar peticiones
    const getPokemons = (props: _PokemonPagination) => dispatch(actionsReducer.pokemons.getPokemons(props));

    // Obtener pokemons al renderizar el componente
    useEffect(() => {
        getPokemons({limit: 15, page: 0});
    }, []);
    
    return (
        <ScrollView style={{paddingTop: 24}}>
            <Text style={{paddingVertical: 10, fontSize: 40, fontWeight: 'bold'}}>Pokemons</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 20, justifyContent: 'center'}}>
                {pokemon.map((pokemon: _Pokemon, index: number) => (
                    <View key={index} style={{width: '46%', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Pokemon', {pokemon})}
                            style={{alignItems: 'center'}}
                        >
                            <Image src={pokemon.image} style={{height: 120, width: 120}}/>
                            <Text>{pokemon.name.toLocaleUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Pokemons;
