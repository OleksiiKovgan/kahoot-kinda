import {
  Box,
  styled,
  Typography,
  type BoxProps,
  type TypographyProps,
} from "@mui/material";
import { INTER } from "../../constants/fonts";

export const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "50px",
  gap: "20px",
  borderRadius: "16px",
  border: `2px solid ${theme.palette.gray.main}`,
  boxSizing: "border-box",
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: INTER,
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "48px",
  letterSpacing: "-0.701px",
}));

export const WrapperHeader = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const WrapperAnswers = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "left",
  gap: "2%",
  rowGap: "30px",
}));
