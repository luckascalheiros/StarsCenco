import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    image: { flex: 1, width: null },
});

export class ImageComponents extends Component {
    render() {
        return <Image style={style.image} source={this.props.imgsource} />;
    }
}
