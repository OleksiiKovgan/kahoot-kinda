import {
  Box,
  styled,
  Toolbar,
  type BoxProps,
  type ToolbarProps,
} from "@mui/material";

export const Wrapper = styled(Box)<BoxProps>(() => ({
  width: "100vw",
  height: "100vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "10px 30px",
}));

export const Header = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "right",
  gap: "5px",
}));

export const ChildrenContainer = styled(Box)<BoxProps>(() => ({
  component: "main",
  flexGrow: 1,
  overflowY: "auto",
}));
