import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';

export const Pokemon = (props: any) => {
    console.log('LOG = ', JSON.stringify(props));

    const {pokemon} = props.route.params;

    useEffect(() => {
      console.log(JSON.stringify(props.props,null,4));
      props.navigation.setOptions({title: pokemon.name.toUpperCase()})
    }, [pokemon]);
    

    return (
        <View style={{alignItems: 'center'}}>
            <Image src={pokemon.image}  style={{height: 320, width: 320}} />
            <Text style={{ paddingTop: 60, fontSize: 40, color: 'red' }}>{pokemon.name}</Text>
        </View>
    )
};
