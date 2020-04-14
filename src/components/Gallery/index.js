import React, { Component, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TouchableWithoutFeedback,
  Modal,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';

// import Api from '../../services/api';

//estilos que vão ser mudados dinamicamente
style = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
  },

  imageWrap: {
    width: 120,
    height: 120,
    padding: 2,
  },

  modalImage: {
    borderRadius: 200,
    width: 280,
    height: 280,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#666',
    backgroundColor: 'rgba(250,250,250,0.2)',
  },

  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },

  container: {
    // backgroundColor: '#000',

    padding: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuGaleria: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#444',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 80,
  },
});

class Gallery extends Component {
  state = {
    modalVisible: false,
    modalImage: '',
    modalImageIndex: 0,
    imagens: [],
  };

  setModalVisible(visible, imageKey) {
    this.setState({
      modalImage: this.state.imagens[imageKey],
      modalVisible: visible,
      modalImageIndex: imageKey,
    });
  }
  componentDidMount() {
    this.loadGallary();
  }

  loadGallary() {
    const galeria = [
      require('../../assets/gallery/vetor(1).png'),
      require('../../assets/gallery/vetor(2).png'),
      require('../../assets/gallery/vetor(3).png'),
      require('../../assets/gallery/vetor(4).png'),
      require('../../assets/gallery/vetor(5).png'),
      require('../../assets/gallery/vetor(6).png'),
      require('../../assets/gallery/vetor(7).png'),
      require('../../assets/gallery/vetor(8).png'),
      require('../../assets/gallery/vetor(9).png'),
      require('../../assets/gallery/vetor(10).png'),
      require('../../assets/gallery/vetor(11).png'),
      require('../../assets/gallery/vetor(12).png'),
      require('../../assets/gallery/desenho(1).jpg'),
      require('../../assets/gallery/desenho(2).jpg'),
      require('../../assets/gallery/desenho(3).jpg'),
      require('../../assets/gallery/desenho(4).jpg'),
      require('../../assets/gallery/desenho(5).jpg'),
      require('../../assets/gallery/desenho(6).jpg'),
      require('../../assets/gallery/desenho(7).jpg'),
      require('../../assets/gallery/desenho(8).jpg'),
      require('../../assets/gallery/desenho(9).jpg'),
      require('../../assets/gallery/desenho(10).jpg'),
      require('../../assets/gallery/desenho(11).jpg'),
      require('../../assets/gallery/desenho(12).jpg'),
      require('../../assets/gallery/desenho(13).jpg'),
      require('../../assets/gallery/desenho(14).jpg'),
      require('../../assets/gallery/desenho(15).jpg'),
      require('../../assets/gallery/desenho(16).jpg'),
      require('../../assets/gallery/desenho(17).jpg'),
      require('../../assets/gallery/desenho(18).jpg'),
      require('../../assets/gallery/desenho(19).jpg'),
      require('../../assets/gallery/desenho(20).jpg'),
      require('../../assets/gallery/desenho(21).jpg'),
      require('../../assets/gallery/desenho(22).jpg'),
      require('../../assets/gallery/desenho(23).jpg'),
      require('../../assets/gallery/desenho(24).jpg'),
      require('../../assets/gallery/desenho(25).jpg'),
      require('../../assets/gallery/desenho(26).jpg'),
      require('../../assets/gallery/desenho(27).jpg'),
      require('../../assets/gallery/desenho(28).jpg'),
      require('../../assets/gallery/desenho(29).jpg'),
      require('../../assets/gallery/desenho(30).jpg'),
      require('../../assets/gallery/desenho(31).jpg'),
      require('../../assets/gallery/desenho(32).jpg'),
      require('../../assets/gallery/desenho(33).jpg'),
      require('../../assets/gallery/desenho(34).jpg'),
      require('../../assets/gallery/desenho(35).jpg'),
      require('../../assets/gallery/3d(1).jpg'),
      require('../../assets/gallery/3d(2).jpg'),
      require('../../assets/gallery/3d(3).jpg'),
      require('../../assets/gallery/3d(4).jpg'),
      require('../../assets/gallery/3d(5).jpg'),
      require('../../assets/gallery/3d(6).jpg'),
      require('../../assets/gallery/3d(7).jpg'),
      require('../../assets/gallery/3d(8).jpg'),
      require('../../assets/gallery/3d(9).jpg'),
      require('../../assets/gallery/3d(10).jpg'),
      require('../../assets/gallery/3d(11).jpg'),
      require('../../assets/gallery/3d(12).jpg'),
      require('../../assets/gallery/3d(13).jpg'),
      require('../../assets/gallery/3d(14).jpg'),
      require('../../assets/gallery/3d(15).jpg'),
      require('../../assets/gallery/3d(16).jpg'),
      require('../../assets/gallery/3d(17).jpg'),
      require('../../assets/gallery/3d(18).jpg'),
      require('../../assets/gallery/3d(19).jpg'),
      require('../../assets/gallery/3d(20).jpg'),
      require('../../assets/gallery/3d(21).jpg'),
      require('../../assets/gallery/3d(22).jpg'),
    ];

    this.setState({
      imagens: [...galeria],
      modalImage: galeria[0],
    });
  }

  async selectImage() {
    const { navigation } = this.props;

    await AsyncStorage.setItem(
      'avatar',
      JSON.stringify({ avatar: this.state.modalImage })
    );

    navigation.goBack();
  }

  controlGalery(val) {
    //recebe +1 para passar a imagem e -1 para voltar, e true para escolher
    const { modalImageIndex, imagens } = this.state;

    if (
      (val !== -1 || modalImageIndex !== 0) &&
      (val !== 1 || imagens.length !== modalImageIndex + 1)
    ) {
      this.setModalVisible(true, modalImageIndex + val);
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/bkStar.png')}
        style={{ flex: 1 }}
      >
        <View style={style.container}>
          <StatusBar
            // translucent={true}
            barStyle="light-content"
            backgroundColor={'#000'}
          />

          <Modal
            style={style.modal}
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
          >
            <TouchableWithoutFeedback
              onPress={() => {
                this.setModalVisible(false);
              }}
            >
              <View style={style.modal}>
                <ImageBackground //Imagem de detalhe de circulo tech quando exibe foto
                  style={{
                    width: 380,
                    height: 380,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../../assets/painelCircular.png')}
                >
                  <Image
                    style={style.modalImage}
                    source={this.state.modalImage}
                  />
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <View style={style.menuGaleria}>
              <Icon
                onPress={() => this.controlGalery(-1)}
                name={'chevrons-left'}
                size={30}
                color="#eee"
              />
              <Text
                style={{
                  color: '#eee',
                  fontWeight: 'bold',
                }}
                onPress={() => {
                  this.selectImage();
                }}
              >
                ESCOLHER
              </Text>
              <Icon
                onPress={() => this.controlGalery(1)}
                name={'chevrons-right'}
                size={30}
                color="#eee"
              />
            </View>
          </Modal>

          <FlatList //Lista que carrega todas as imagens em 3 colunas
            style={{ marginTop: 30 }}
            numColumns={3}
            data={this.state.imagens}
            renderItem={({ item, index }) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  this.setModalVisible(true, index);
                }}
              >
                <View
                  key={index}
                  style={{
                    padding: 2,

                    width: Dimensions.get('window').width / 3 - 4,
                    height: Dimensions.get('window').width / 3 - 4,
                  }}
                >
                  <Image key={index} source={item} style={style.image} />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Gallery;
