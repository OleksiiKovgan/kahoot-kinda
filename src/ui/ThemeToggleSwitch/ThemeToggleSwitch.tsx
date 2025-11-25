import { useTheme } from "@mui/material";
import { ThemeSwitch } from "./ThemeToggleSwitch.styled";
import { useAppDispatch } from "../../hooks";
import { toggleTheme } from "../../reduxStore/theme/themeSlice";
import LightModeIcon from "@mui/icons-material/LightMode"; // Sun icon
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggleSwitch = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ThemeSwitch
      //sx={{ m: 1 }}
      onClick={handleThemeToggle}
      icon={<LightModeIcon sx={{ fontSize: 20, color: "#ffeb3b" }} />}
      checkedIcon={<DarkModeIcon sx={{ fontSize: 20, color: "#f5f5f5" }} />}
      checked={theme.palette.mode === "dark"}
    />
  );
};

export default ThemeToggleSwitch;
