const {default: styled} = require('styled-components/native');
import {colors} from '../../app/colors';

export const StyledTextInput = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.input.borderColor};
  height: 40px;
  color: ${colors.text.primary};
  margin: 8px;
  padding-horizontal: 8px;
  border-radius: 8px;
`;

export const StyledText = styled.Text`
  color: ${colors.text.primary};
  margin: 8px;
`;
