import {
  Box,
  type BoxProps,
  styled,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { INTER } from "../../constants/fonts";

export const Wrapper = styled(Box)<BoxProps>(() => ({
  width: "100%",
  padding: "10%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

export const WrapperActions = styled(Box)<BoxProps>(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
}));

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: INTER,
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "48px",
  letterSpacing: "-0.701px",
}));
