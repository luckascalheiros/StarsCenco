import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';

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

class Cadastro extends Component {
  state = {
    backImage: require('../../assets/backgroundLuz.png'),
    corDetalhes: '#fff',
    avatar: require('../../assets/perfil.png'),
    gamerTag: '',
    loading: false,
    textStatusText: '',
    classe: '',
  };

  componentDidMount() {
    this.setLadoForça();
    this.props.navigation.addListener('focus', this.setAvatarState);
  }

  setAvatarState = async () => {
    const avatar = await AsyncStorage.getItem('avatar');
    if (avatar) {
      this.setState({
        avatar: JSON.parse(avatar).avatar,
      });
      AsyncStorage.removeItem('avatar');
    }
  };

  selectAvatar = () => {
    // this.setStorage();
    const { navigation } = this.props;
    navigation.navigate('Galeria');
  };

  handleGameTag() {}

  save() {}

  setStatusText() {}

  setLadoForça() {
    const name = this.props.route.name;

    if (name === 'jedi') {
      this.setState({
        backImage: require('../../assets/backgroundLuz.png'),
        corDetalhes: '#016ce3',
        classe: 'jedi',
      });
    } else if (name === 'sith') {
      this.setState({
        backImage: require('../../assets/backgroundNegro.png'),
        corDetalhes: '#d72d2d',
        classe: 'sith',
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
            <TouchableOpacity
              onPress={() => {
                this.selectAvatar();
              }}
            >
              <ImageAvatar source={avatar} backColor={corDetalhes} />
            </TouchableOpacity>
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
              {this.state.classe === 'jedi'
                ? 'ESCOLHER CLASSE JEDI'
                : 'ESCOLHER CLASSE SITH'}
            </SubmitButton>
            <StatusText>{textStatusText}</StatusText>
          </ContainerForm>
        </Container>
      </ImageBackground>
    );
  }
}
export default Cadastro;
