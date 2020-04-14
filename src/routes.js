import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Paginas
import Cadastro from './routes.cadastro';
import Galarry from './components/Gallery';

const Stack = createStackNavigator();

//StackNavigator
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Galeria" component={Galarry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
