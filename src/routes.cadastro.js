import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Paginas
import CadastroJedi from './pages/Cadastro';
import CadastroSith from './pages/Cadastro';
import TelaEscolha from './pages/Escolha';

const Navegacao = createMaterialTopTabNavigator();

//StackNavigator
function RoutesCadastro() {
  return (
    <Navegacao.Navigator
      initialRouteName={'TelaEscolha'}
      tabBarPosition={'bottom'}
      backBehavior={'none'}
      keyboardDismissMode={'on-drag'}
      sceneContainerStyle={{ backgroundColor: '#000' }}
      tabBarOptions={{
        showLabel: false,
        scrollEnabled: false,
        tabStyle: { position: 'absolute' },
        indicatorStyle: { opacity: 0 },
      }}
    >
      <Navegacao.Screen name="jedi" component={CadastroJedi} />
      <Navegacao.Screen name="TelaEscolha" component={TelaEscolha} />
      <Navegacao.Screen name="sith" component={CadastroSith} />
    </Navegacao.Navigator>
  );
}

export default RoutesCadastro;
