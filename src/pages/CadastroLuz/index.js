import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

//Imagens
const bkSombra = require('../../assets/TelaSombra.png');

import {
  Container,
  SubmitButton,
  FormImput,
  ContainerForm,
  ImageAvatar,
  ContainerAvatar,
  TextTitle,
  Strong,
  ContainerTitle,
  LineTitle,
  StatusText,
} from './styles';

//estilhos que executam dinamicamente

class CadastroLuz extends Component {
  state = {
    corDetalhes: '#d72d2d',
    avatar: require('../../assets/perfil.png'),
    gamerTag: '',
    loading: false,
    textStatusText: '',
  };

  handleGameTag() {}

  save() {}

  setStatusText() {}

  render() {
    const { corDetalhes, avatar, loading, textStatusText } = this.state;
    return (
      <ImageBackground source={bkSombra} style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'rgba(0, 0, 0, 0)'}
        />

        <Container>
          <ContainerTitle>
            <ImageAvatar source={avatar} backColor={corDetalhes} />
            <TextTitle>
              CRIAR <Strong>CONTA</Strong>
            </TextTitle>
            <LineTitle backColor={corDetalhes} />
          </ContainerTitle>

          <ContainerForm>
            <FormImput
              icon="gamepad-variant"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Escolha sua Gamertag"
              borderColor={corDetalhes}
              onChange={this.textStatusText}
            />
            <SubmitButton
              //   onPress={() => {
              //     navigation.navigate('SignIn');
              //   }}
              backgroundColor={corDetalhes}
              loading={loading}
            >
              ESCOLHER LADO DA LUZ
            </SubmitButton>
            <StatusText>{textStatusText}</StatusText>
          </ContainerForm>
        </Container>
      </ImageBackground>
    );
  }
}
export default CadastroLuz;
