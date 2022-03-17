import {
  gray,
  grayDark,
  orange,
  orangeDark,
  blue,
  blueDark,
} from "@radix-ui/colors";

const lightTheme = {
  colors: {
    ...gray,
    ...orange,
    ...blue,
  },
};

const darkTheme = {
  colors: {
    ...grayDark,
    ...orangeDark,
    ...blueDark,
  },
};

export { lightTheme, darkTheme };
