const {default: styled} = require('styled-components/native');
import colors from '../../app/colors';

export const StyledTextInput = styled.TextInput`
  border-width: 1px;
  align-self: flex-start;
  width: 100px;
  height: 40px;
  color: ${colors.BASE_COLORS.BLACK};
`;

export const StyledText = styled.Text`
  color: ${colors.BASE_COLORS.BLACK};
`;
