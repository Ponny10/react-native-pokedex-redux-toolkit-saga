import {createStackNavigator} from '@react-navigation/stack';

import Screeens from '../screens';

const Stack = createStackNavigator<any>();

export const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Screeens.Home}/>
            <Stack.Screen name='Pokemon' component={Screeens.Pokemon}/>
        </Stack.Navigator>
    );
};