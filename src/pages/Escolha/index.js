import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  ImageBackground,
  Modal,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

//Imagens
import {
  Container,
  SubmitButton,
  ImageLogo,
  ContainerText,
  ModalTextL1,
  ModalTextL2,
  ModalTextL3,
  ModalTextL4,
} from './styles';

//estilhos que executam dinamicamente

class TelaEscolha extends Component {
  state = {
    backImage: require('../../assets/backgroundEscolha.png'),
    logoStarCenco: require('../../assets/logoStarCenco.png'),
    bkModal: require('../../assets/modal.png'),
    modalStatus: true,
  };

  setStatusModal() {
    this.setState({
      modalStatus: false,
    });
    console.log(this.state.modalStatus);
  }

  render() {
    const {
      backImage,
      logoStarCenco,
      bkModal,
      modalStatus,
      modal,
    } = this.state;
    return (
      <ImageBackground
        source={backImage}
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}
      >
        <View>
          <Modal
            style={{ flex: 1 }}
            animationType={'fade'}
            transparent={true}
            visible={modalStatus}
          >
            <ImageBackground source={bkModal} style={{ flex: 1 }}>
              <ContainerText>
                <ModalTextL1>A FORÇA ESTÁ EM VOCÊ</ModalTextL1>
                <ModalTextL2>A PODEMOS SENTIR, MAS A ESCOLHA É SUA</ModalTextL2>
                <ModalTextL3>QUAL LADO DA FORÇA</ModalTextL3>
                <ModalTextL4>VOCÊ ESTARÁ?</ModalTextL4>
                <TouchableWithoutFeedback onPress={() => this.setStatusModal()}>
                  <SubmitButton backgroundColor={'rgba(250,250,250,0.4)'}>
                    ESCOLHER LADO
                  </SubmitButton>
                </TouchableWithoutFeedback>
              </ContainerText>
            </ImageBackground>
          </Modal>
        </View>

        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'rgba(0, 0, 0, 0)'}
        />
        <Container>
          <ImageLogo source={logoStarCenco} />
        </Container>
      </ImageBackground>
    );
  }
}
export default TelaEscolha;
