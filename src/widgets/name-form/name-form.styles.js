const {default: styled} = require('styled-components/native');
import {colors} from '../../app/colors';

export const StyledTextInput = styled.TextInput`
  border-width: 1px;
  align-self: flex-start;
  width: 100px;
  height: 40px;
  color: ${colors.text.primary};
`;

export const StyledText = styled.Text`
  color: ${colors.text.primary};
`;
