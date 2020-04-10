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
  /* margin-top: 400px; */
  margin-left: 50px;
  margin-right: 50px;
  border: 2px solid;
`;

export const ImageLogo = styled.Image`
  width: 300px;
  height: 151px;
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
