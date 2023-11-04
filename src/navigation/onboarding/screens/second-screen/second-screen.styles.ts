import styled from 'styled-components/native';
import {colors} from '../../../../app/colors';

export const StyledText = styled.Text`
  color: ${colors.text.primary};
  align-self: center;
  padding: 8px;
`;

export const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
