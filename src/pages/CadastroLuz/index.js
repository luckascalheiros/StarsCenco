import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
  View,
} from 'react-native';

//Imagens

import {
  Container,
  SubmitButton,
  FormImput,
  ContainerForm,
  ImageAvatar,
  TextTitle,
  Strong,
  ContainerTitle,
  LineTitle,
  StatusText,
} from './styles';

//estilhos que executam dinamicamente

class CadastroLuz extends Component {
  state = {
    backImage: require('../../assets/backgroundLuz.png'),
    corDetalhes: '#d72d2d',
    avatar: require('../../assets/perfil.png'),
    gamerTag: '',
    loading: false,
    textStatusText: '',
    buttonText: 'ESCOLHER LADO DA LUZ',
  };

  componentDidMount() {
    this.setLadoForça();
  }

  handleGameTag() {}

  save() {}

  setStatusText() {}

  setLadoForça() {
    const name = this.props.route.name;

    if (name === 'luz') {
      this.setState({
        backImage: require('../../assets/backgroundLuz.png'),
        corDetalhes: '#016ce3',
        buttonText: 'ESCOLHER LADO DA LUZ',
      });
    } else if (name === 'negro') {
      this.setState({
        backImage: require('../../assets/backgroundNegro.png'),
        corDetalhes: '#d72d2d',
        buttonText: 'ESCOLHER LADO NEGRO',
      });
    }
  }

  render() {
    const {
      corDetalhes,
      avatar,
      loading,
      textStatusText,
      backImage,
      buttonText,
    } = this.state;
    return (
      <ImageBackground source={backImage} style={{ flex: 1 }}>
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
              {buttonText}
            </SubmitButton>
            <StatusText>{textStatusText}</StatusText>
          </ContainerForm>
        </Container>
      </ImageBackground>
    );
  }
}
export default CadastroLuz;
