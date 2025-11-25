declare module "@mui/material/styles" {
  export interface Palette {
    gray: Palette["primary"];
  }
  export interface PaletteOptions {
    gray: PaletteOptions["primary"];
  }
  export interface BreakpointOverrides {
    xs: true;
    sm: false;
    md: false;
    lg: false;
    xl: true;
  }
}

export {};
