import 'react-native-gesture-handler';
import React from 'react';

// Importar StatusBar para configurar Header móvil
import {StatusBar} from 'react-native';

// Importa el proveedor de react redux
import {Provider} from 'react-redux';

// Importar el store
import store from './src/store';

// Importar NavigationContainer para la navegación
import {NavigationContainer} from '@react-navigation/native';

// Importar la navegación o componente a renderizar
import Pokemons from './src/screens/Pokemons';
import { DashboardStack } from './src/navigation';



function App(): React.JSX.Element {
  return (
    // Engloba la App con el store configurado
    <Provider store={store}>
      {/* Configurar el Header del móvil */}
      <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'light-content'}
        />
        {/* Envolver el App con NavigacionContianer para la navegación en toda la App */}
        <NavigationContainer>
          <DashboardStack/>
        </NavigationContainer>
    </Provider>
  )
}

export default App;
