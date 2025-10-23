import { Button, styled, type ButtonProps } from "@mui/material";
import { INTER } from "../../constants/fonts";

interface IButtonProps extends ButtonProps {
  width?: string;
  height?: string;
  borderradius?: string;
  isselected?: "true";
}

export const StyledDefaultButton = styled(Button)<IButtonProps>(
  ({ theme, width, height, borderradius, isselected }) => ({
    width: width ? width : "fit-content",
    minWidth: width ? width : "20%",
    height: height ? height : "100px",
    background: isselected
      ? theme.palette.action.selected
      : theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: borderradius ? borderradius : "18px",
    border: `1px solid ${theme.palette.tonalOffset}`,
    padding: "15px",
    gap: "5px",
    "&:hover": {
      border: `1px solid ${theme.palette.action.active}`,
      background: isselected
        ? theme.palette.action.selected
        : theme.palette.background.default,
    },
    color: theme.palette.text.primary,
    fontFamily: INTER,
    fontWeight: 500,
  })
);
