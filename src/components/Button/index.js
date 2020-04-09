import React, { forwardRef } from 'react';
import { ActivityIndicator } from 'react-native';
import PropType from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function Buton({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff"></ActivityIndicator>
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Buton.propType = {
  //oneOfType arrei de possibilidadde de tipos
  children: PropType.string.isRequired,
  loading: PropType.bool,
};

Buton.defaultProps = {
  loading: false,
};
