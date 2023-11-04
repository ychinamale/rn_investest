import styled from 'styled-components/native';
import {colors} from '../../../../app/colors';
import {Variants} from '../../../../app/types';

export const StyledView = styled.View`
  justify-content: flex-end;
  height: 100%;
`;

export const slideButtonStyles = {
  padding: 0,
  height: 48,
  borderRadius: 8,
  containerStyle: {
    backgroundColor: colors.button.backgroundColor(Variants.LINK),
    borderColor: colors.button.borderColor(Variants.TERTIARY),
    borderWidth: 1,
  },
  thumbStyle: {
    backgroundColor: colors.button.backgroundColor(),
  },
  titleStyle: {
    fontSize: 12,
  },
};

export const StyledWrapper = styled.View`
  margin-horizontal: 8px;
`;
