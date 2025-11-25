import { styled, Switch } from "@mui/material";

export const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 58,
  height: 30,
  padding: 0,
  display: "flex",

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 4,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      transform: "translateX(28px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.gray.main,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    backgroundColor: theme.palette.gray.main,
    boxShadow: theme.shadows[1],
  },

  "& .MuiSwitch-track": {
    borderRadius: 30 / 2,
    opacity: 1,
    backgroundColor: theme.palette.gray.main,
    boxSizing: "border-box",
  },
}));
