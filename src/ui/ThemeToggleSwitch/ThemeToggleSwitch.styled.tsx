import { styled, Switch } from "@mui/material";
import {
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS,
} from "../../theme/colors.const";

export const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  height: 30,
  padding: 0,
  display: "flex",

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4, // This creates the space between the thumb and the track
    transform: "translateX(0px)", // Start position
    "&.Mui-checked": {
      transform: "translateX(28px)", // End position (58 width - 30 thumb - (2*3 margin))
      color: "#fff", // Color of the ripple effect
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark"
            ? DARK_THEME_COLORS.gray
            : LIGHT_THEME_COLORS.gray,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    backgroundColor:
      theme.palette.mode === "dark"
        ? DARK_THEME_COLORS.main
        : LIGHT_THEME_COLORS.main,
    boxShadow: theme.shadows[1], // Adds a subtle shadow
  },

  "& .MuiSwitch-track": {
    borderRadius: 30 / 2, // Creates the pill shape
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? DARK_THEME_COLORS.gray
        : LIGHT_THEME_COLORS.gray,
    boxSizing: "border-box",
  },
}));
