import {
  Box,
  styled,
  Toolbar,
  type BoxProps,
  type ToolbarProps,
} from "@mui/material";

export const Wrapper = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  boxSizing: "border-box",
}));

export const WrapperQuestions = styled(Box)<BoxProps>(() => ({
  width: "100%",
  //height: "fill-content",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

export const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "left",
  gap: "2%",
  rowGap: "30px",
  padding: "20px",
}));
