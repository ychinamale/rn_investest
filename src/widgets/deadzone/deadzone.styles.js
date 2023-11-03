import styled from 'styled-components/native';
import {colors} from '../../app/colors';

export const StyledView = styled.View`
  flex: 1;
  background-color: ${colors.background.default};
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: ${colors.background.alternate};
  font-size: 18px;
  align-self: center;
  text-align: center;
`;
