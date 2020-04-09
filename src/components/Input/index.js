import React, { forwardRef } from 'react';

import PropType from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';
import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container {...rest} style={style}>
      {icon && (
        <Icon name={icon} size={23} color="rgba(255,255,255, 0.6)"></Icon>
      )}
      <TInput {...rest} ref={ref}></TInput>
    </Container>
  );
}

Input.propType = {
  //oneOfType arrei de possibilidadde de tipos
  icon: PropType.string,
  style: PropType.oneOfType([PropType.object, PropType.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

//ref referenccia direta do imput, não é passada por padão então se usa forwardRef para pegar a ref

//  <Input ref={}></Input>

export default forwardRef(Input);
