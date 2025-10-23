import {
  Box,
  styled,
  Typography,
  type BoxProps,
  type TypographyProps,
} from "@mui/material";
import { INTER } from "../../constants/fonts";

export const Wrapper = styled(Box)<BoxProps>(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "75px",
  gap: "40px",
  boxSizing: "border-box",
}));

export const WrapperHeader = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const WrapperButtons = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
}));

export const WrapperElements = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

export const WrapperForm = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "25px",
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: INTER,
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "48px",
  letterSpacing: "-0.701px",
}));
