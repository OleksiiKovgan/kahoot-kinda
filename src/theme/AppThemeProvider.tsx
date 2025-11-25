import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, type ThemeOptions } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { getTheme } from "../reduxStore/theme/themeSelectors";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const mode = useSelector(getTheme);

  const theme = useMemo(() => {
    const themeOptions = mode === "light" ? lightTheme : darkTheme;
    return createTheme(themeOptions as ThemeOptions);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies a style normalization and sets the body background color */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
