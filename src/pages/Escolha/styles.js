import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
  padding-top: 120px;
`;

export const ContainerText = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 100px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 400px;
  border-radius: 0px;

  border: 2px solid;
`;

export const ImageLogo = styled.Image`
  margin-top: 120px;
  align-self: center;

  width: 300px;
  height: 125px;
`;

export const ModalTextL1 = styled.Text`
  font-size: 23px;
  color: #fff;
  margin-top: 5px;
`;

export const ModalTextL2 = styled.Text`
  font-size: 12.5px;
  color: #fff;
  margin-top: 5px;
`;
export const ModalTextL3 = styled.Text`
  font-size: 25.5px;
  color: #fff;
  margin-top: 5px;
`;
export const ModalTextL4 = styled.Text`
  font-size: 38px;
  color: #fff;
`;
