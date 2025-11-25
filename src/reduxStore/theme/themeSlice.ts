import type { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
  mode: PaletteMode;
}

const getInitialSystemMode = (): PaletteMode => {
  // Check if the matchMedia API is available
  if (typeof window !== "undefined" && window.matchMedia) {
    // Check if the user's OS is set to dark mode
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  return "light";
};

const initialState: IThemeState = {
  mode: getInitialSystemMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
