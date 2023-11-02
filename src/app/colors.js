const BASE_COLORS = {
  WHITE_0: '#ffffff',
  WHITE_1: '#fffff2',
  BLACK_0: '#000000',
  BLACK_1: '#0e1111',
  BLACK_2: '#232b2b',
  BLACK_3: '#353839',
  BLUE_0: '#70b7ff',
  BLUE_1: '#5badff',
  BLUE_2: '#2d89e5',
  BLUE_3: '#b2cefc',
  BLUE_4: '#a0b9e2',
  BLUE_5: '#8ea4c9',
  BLUE_6: '#4d90fa',
  BLUE_GREY_0: '#3d525e',
  BLUE_GREY_1: '#4d6776',
  BLUE_GREY_2: '#2e3d46',
  GREY_0: '#c0c5ce',
  GREY_1: '#65737e',
  GREY_2: '#4f5b66',
};

const STATUS = {
  ACTIVE: 0,
  ENABLED: 1,
  DISABLED: 2,
};

export const colors = {
  button: {
    background: {
      primary: [BASE_COLORS.BLUE_2, BASE_COLORS.BLUE_0, BASE_COLORS.BLUE_1],
      secondary: [
        BASE_COLORS.BLUE_GREY_0,
        BASE_COLORS.BLUE_GREY_1,
        BASE_COLORS.BLUE_GREY_2,
      ],
      tertiary: [BASE_COLORS.BLACK_1, BASE_COLORS.BLACK_2, BASE_COLORS.BLACK_3],
      link: [undefined, undefined, undefined],
    },
    foreground: {
      primary: [BASE_COLORS.WHITE_1, BASE_COLORS.WHITE_1, BASE_COLORS.BLUE_5],
      secondary: [
        BASE_COLORS.BLUE_0,
        BASE_COLORS.BLUE_0,
        BASE_COLORS.BLUE_GREY_1,
      ],
      tertiary: [
        BASE_COLORS.BLUE_0,
        BASE_COLORS.BLUE_0,
        BASE_COLORS.BLUE_GREY_1,
      ],
      link: [BASE_COLORS.BLUE_0, BASE_COLORS.BLUE_0, BASE_COLORS.BLUE_GREY_1],
    },
    border: {
      primary: [undefined, undefined, undefined],
      secondary: [undefined, undefined, undefined],
      tertiary: [undefined, undefined, undefined],
      link: [BASE_COLORS.GREY_2, BASE_COLORS.GREY_2, BASE_COLORS.GREY_2],
    },
    textColor(variant = 'primary') {
      return this.foreground[variant][STATUS.ENABLED];
    },
    backgroundColor(variant = 'primary') {
      return this.background[variant][STATUS.ENABLED];
    },
    borderColor(variant = 'primary') {
      return this.border[variant][STATUS.ENABLED];
    },
    activeTextColor(variant = 'primary') {
      return this.foreground[variant][STATUS.ACTIVE];
    },
    activeBackgroundColor(variant = 'primary') {
      return this.background[variant][STATUS.ACTIVE];
    },
    activeBorderColor(variant = 'primary') {
      return this.border[variant][STATUS.ACTIVE];
    },
    disabledTextColor(variant = 'primary') {
      return this.foreground[variant][STATUS.DISABLED];
    },
    disabledBackgroundColor(variant = 'primary') {
      return this.background[variant][STATUS.DISABLED];
    },
    disabledBorderColor(variant = 'primary') {
      return this.border[variant][STATUS.DISABLED];
    },
  },
  text: {
    primary: BASE_COLORS.BLACK_1,
    secondary: BASE_COLORS.BLUE_6,
    tertiary: BASE_COLORS.BLUE_6,
  },
  input: {
    borderColor: BASE_COLORS.GREY_0,
  },
};
