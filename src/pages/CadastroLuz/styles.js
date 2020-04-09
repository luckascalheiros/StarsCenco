import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  /* flex-direction: row; */
  flex: 1;
  padding: 0 30px;
  justify-content: flex-end;
`;

export const ContainerForm = styled.View`
  /* faz ele preencher todo o espaço possovel, self se refere a ele mesmo */
  flex: 1;
  align-self: stretch;

  /* justify-content: flex-end; */
  margin-top: 40;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-top: 380px;
`;

export const FormImput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ImageAvatar = styled.Image`
  border: 6px solid ${(props) => props.backColor};
  margin-bottom: 25px;
  border-radius: 90px;
  height: 180px;
  width: 180px;
`;

export const TextTitle = styled.Text`
  font-size: 33px;
  color: #eee;
  padding: 0;
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
