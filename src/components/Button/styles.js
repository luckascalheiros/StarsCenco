import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 55px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'rgba(250, 250, 250, 0.1)'};
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
