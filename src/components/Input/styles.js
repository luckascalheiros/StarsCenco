import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 55px;
  background-color: rgba(250, 250, 250, 0.1);
  border-radius: 50;
  border: 3px solid
    ${(props) => (props.borderColor ? props.borderColor : '#ccc')};

  flex-direction: row;
  align-items: center;
`;
export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255,255,255,0.6)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
`;
