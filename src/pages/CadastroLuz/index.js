import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, StatusBar, Image } from 'react-native';

//Componentes
import Background from '../../components/Background';

//estilos

//Imagens
const BackImage = require('../../assets/backgroudaLuz.png');
const LogoLuz = require('../../assets/luzLogo.png');

import {
  Container,
  SubmitButton,
  FormImput,
  ContainerForm,
  ImageAvatar,
  ImageClasse,
  ContainerAvatar,
  Footer,
  TextTitle,
  Strong,
  ContainerTitle,
  LineTitle,
  StatusText,
} from './styles';

//estilhos que executam dinamicamente
const styled = StyleSheet.create({
  BackImage: {
    resizeMode: 'contain',
    position: 'absolute',
    left: 0,
    bottom: 0,
    opacity: 0.2,
    width: (Dimensions.get('window').width * 80) / 100,
    height: (Dimensions.get('window').width * 80) / 100,
  },
});

class CadastroLuz extends Component {
  state = {
    corClara: '#2C5BBF',
    corEscura: '#072973',
    corDetalhes: '#0093EF',
    avatar: require('../../assets/perfil.png'),
    gamerTag: '',
    loading: false,

    textStatusText: '',
  };

  handleGameTag() {}

  save() {}

  setStatusText() {}

  render() {
    const {
      corClara,
      corEscura,
      corDetalhes,
      avatar,
      loading,
      textStatusText,
    } = this.state;
    return (
      <Background colors={[corEscura, corClara]}>
        <StatusBar barStyle="light-content" backgroundColor={corClara} />
        <Image source={BackImage} style={styled.BackImage} />

        <Container>
          <ContainerAvatar>
            <ImageAvatar source={avatar} />
            <ImageClasse source={LogoLuz} />
          </ContainerAvatar>
          <ContainerTitle>
            <TextTitle>
              CRIAR <Strong>CONTA</Strong>
            </TextTitle>
          </ContainerTitle>
          <LineTitle />

          <ContainerForm>
            <FormImput
              icon="gamepad-variant"
              autoCorrect={false}
              autoCaptalize="none"
              placeholder="Informe sua Gamertag"
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
            <StatusText>Gamertag já usada!</StatusText>
          </ContainerForm>
        </Container>
        <Footer></Footer>
      </Background>
    );
  }
}
export default CadastroLuz;
