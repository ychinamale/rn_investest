import styled from 'styled-components/native';
import {colors} from '../../../app/colors';

export const StyledView = styled.View`
  background-color: ${colors.background.default};
  height: 240px;
  width: 60%;
  align-self: center;
  border-radius: 16px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${colors.text.error};
`;
