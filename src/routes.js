import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

//Paginas

import CadastroLuz from './pages/CadastroLuz';
import CadastroNegro from './pages/CadastroLuz';
import TelaEscolha from './pages/Escolha';

const Navegacao = createMaterialTopTabNavigator();

//StackNavigator

function Routes() {
  return (
    <NavigationContainer>
      {/* Stack.Navigator - Faz a navegação por botão, screenOptions=
            {{ headerShown: false }}: false desabilita cabeçário */}
      <Navegacao.Navigator
        initialRouteName={'TelaEscolha'}
        tabBarPosition={'bottom'}
        backBehavior={'none'}
        keyboardDismissMode={'on-drag'}
        tabBarOptions={{
          showLabel: false,
          scrollEnabled: false,
          tabStyle: { position: 'absolute' },
          indicatorStyle: { opacity: 0 },
        }}
      >
        <Navegacao.Screen name="luz" component={CadastroNegro} />
        <Navegacao.Screen name="TelaEscolha" component={TelaEscolha} />
        <Navegacao.Screen name="negro" component={CadastroLuz} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
