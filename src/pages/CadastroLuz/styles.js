import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const ContainerForm = styled.View`
  /* faz ele preencher todo o espaço possovel, self se refere a ele mesmo */
  align-self: stretch;
  margin-top: 40px;
`;
export const FormImput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  align-items: baseline;
`;
export const ImageAvatar = styled.Image`
  border-radius: 100px;
  border: 6px solid #0093ef;
  height: 170px;
  width: 170px;
`;
export const ImageClasse = styled.Image`
  height: 80px;
  width: 80px;
  opacity: 0.6;
  margin-left: 15px;
`;

export const Footer = styled.View`
  height: 15px;
  background-color: #0093ef;
`;

export const TextTitle = styled.Text`
  font-size: 33px;
  color: #eee;
  font-weight: 900;
  padding: 0;
`;

export const ContainerTitle = styled.View`
  margin-bottom: 30px;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const LineTitle = styled.View`
  border-radius: 10px;
  width: 130;
  height: 2;
  background-color: #0093ef;
`;
