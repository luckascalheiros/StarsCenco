import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  padding-top: 250px;
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

export const ContainerAvatar = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  align-items: baseline;
`;
export const ImageAvatar = styled.Image`
  border-radius: 100px;
  border: 6px solid ${(props) => props.backColor};
  margin-bottom: 25px;
  height: 170px;
  width: 170px;
`;

export const TextTitle = styled.Text`
  font-size: 33px;
  color: #eee;
  font-weight: 900;
  padding: 0;
`;

export const ContainerTitle = styled.View`
  align-items: center;
`;

export const Strong = styled.Text`
  font-weight: bold;
`;

export const LineTitle = styled.View`
  margin-top: 30px;
  border-radius: 10px;
  width: 130;
  height: 2;
  background-color: ${(props) => props.backColor};
`;

export const StatusText = styled.Text`
  align-self: center;
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
`;
