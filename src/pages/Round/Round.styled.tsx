import {
  Box,
  Divider,
  styled,
  Toolbar,
  type BoxProps,
  type ToolbarProps,
} from "@mui/material";

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "50px",
  gap: "40px",
  boxSizing: "border-box",
  border: `2px solid ${theme.palette.background.default}`,
}));

export const CustomDivider = styled(Divider)(({ theme }) => ({
  marginLeft: "-50px",
  width: "calc(100% + 100px)",
  borderWidth: "1px",
  borderColor: theme.palette.grey[400],
}));

export const WrapperQuestions = styled(Box)<BoxProps>(() => ({
  width: "100%",
  marginTop: "60px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "left",
  gap: "2%",
  rowGap: "30px",
  padding: "20px",
}));

export const AppBarSpacer = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
