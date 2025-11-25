import type { PaletteMode, ThemeOptions } from "@mui/material/styles";
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "./colors.const";

const COMPONENTS: ThemeOptions["components"] = {};

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light" as PaletteMode,
    primary: {
      main: LIGHT_THEME_COLORS.main,
      light: LIGHT_THEME_COLORS.light,
      dark: LIGHT_THEME_COLORS.black,
      contrastText: LIGHT_THEME_COLORS.pantone,
    },
    secondary: {
      main: LIGHT_THEME_COLORS.secondary,
      light: LIGHT_THEME_COLORS.secondaryGray,
      dark: LIGHT_THEME_COLORS.secondaryBlack,
      contrastText: LIGHT_THEME_COLORS.contrastGray,
    },
    error: {
      main: LIGHT_THEME_COLORS.redLight,
      light: LIGHT_THEME_COLORS.redMain,
      dark: LIGHT_THEME_COLORS.redDark,
      contrastText: LIGHT_THEME_COLORS.error,
    },
    warning: {
      main: LIGHT_THEME_COLORS.orangeMain,
      light: LIGHT_THEME_COLORS.yellowLight,
      dark: LIGHT_THEME_COLORS.yellowDark,
      contrastText: LIGHT_THEME_COLORS.orange,
    },
    info: {
      main: LIGHT_THEME_COLORS.paradise,
      light: LIGHT_THEME_COLORS.lightBlue,
      dark: LIGHT_THEME_COLORS.purple,
      contrastText: LIGHT_THEME_COLORS.grayDarkBorder,
    },
    success: {
      main: LIGHT_THEME_COLORS.greenMain,
      light: LIGHT_THEME_COLORS.greenLight,
      dark: LIGHT_THEME_COLORS.greenDark,
      contrastText: LIGHT_THEME_COLORS.teal,
    },
    gray: {
      main: LIGHT_THEME_COLORS.gray,
      light: LIGHT_THEME_COLORS.grafit,
      dark: LIGHT_THEME_COLORS.grayText,
      contrastText: LIGHT_THEME_COLORS.grayBackgroundDark,
    },
    background: {
      paper: LIGHT_THEME_COLORS.white,
      default: LIGHT_THEME_COLORS.white,
    },
    text: {
      primary: LIGHT_THEME_COLORS.secondary,
      secondary: LIGHT_THEME_COLORS.secondaryGray,
      disabled: LIGHT_THEME_COLORS.disabled,
    },
    action: {
      active: LIGHT_THEME_COLORS.main,
      hover: LIGHT_THEME_COLORS.hover,
      focus: LIGHT_THEME_COLORS.main,
      disabled: LIGHT_THEME_COLORS.disableBackground,
    },
    divider: LIGHT_THEME_COLORS.divider,
  },
  components: COMPONENTS,
};

export const darkTheme = {
  palette: {
    mode: "dark" as PaletteMode,
    primary: {
      main: DARK_THEME_COLORS.main,
      light: DARK_THEME_COLORS.light,
      dark: DARK_THEME_COLORS.dark,
      contrastText: DARK_THEME_COLORS.pantone,
    },
    secondary: {
      main: DARK_THEME_COLORS.secondary,
      light: DARK_THEME_COLORS.secondaryGray,
      dark: DARK_THEME_COLORS.secondaryBlack,
      contrastText: DARK_THEME_COLORS.contrastGray,
    },
    error: {
      main: DARK_THEME_COLORS.redLight,
      light: DARK_THEME_COLORS.redMain,
      dark: DARK_THEME_COLORS.redDark,
      contrastText: DARK_THEME_COLORS.error,
    },
    warning: {
      main: DARK_THEME_COLORS.orangeMain,
      light: DARK_THEME_COLORS.yellowLight,
      dark: DARK_THEME_COLORS.yellowDark,
      contrastText: DARK_THEME_COLORS.orange,
    },
    info: {
      main: DARK_THEME_COLORS.paradise,
      light: DARK_THEME_COLORS.lightBlue,
      dark: DARK_THEME_COLORS.purple,
      contrastText: DARK_THEME_COLORS.grayDarkBorder,
    },
    success: {
      main: DARK_THEME_COLORS.greenMain,
      light: DARK_THEME_COLORS.greenLight,
      dark: DARK_THEME_COLORS.greenDark,
      contrastText: DARK_THEME_COLORS.teal,
    },
    gray: {
      main: DARK_THEME_COLORS.gray,
      light: DARK_THEME_COLORS.grafit,
      dark: DARK_THEME_COLORS.grayText,
      contrastText: DARK_THEME_COLORS.grayBackgroundDark,
    },
    background: {
      paper: DARK_THEME_COLORS.blue100,
      default: DARK_THEME_COLORS.lightBlue,
    },
    text: {
      primary: DARK_THEME_COLORS.secondary,
      secondary: DARK_THEME_COLORS.secondaryGray,
      disabled: DARK_THEME_COLORS.disabled,
    },
    action: {
      active: DARK_THEME_COLORS.main,
      hover: DARK_THEME_COLORS.hover,
      focus: DARK_THEME_COLORS.main,
      disabled: DARK_THEME_COLORS.disableBackground,
    },
    divider: DARK_THEME_COLORS.divider,
  },
  components: COMPONENTS,
};
