import {
  Box,
  type BoxProps,
  Link,
  type LinkProps,
  styled,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { INTER } from "../../constants/fonts";

interface IBoxProps extends BoxProps {
  width?: string;
  height?: string;
}

export const WrapperItem = styled(Box)<IBoxProps>(
  ({ height, width, theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height,
    width,
    padding: "20px",
    borderRadius: "16px",
    border: `1px solid ${theme.palette.secondary.light}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontFamily: INTER,
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "24px",
  letterSpacing: "-0.347px",
}));

export const Delete = styled(Link)<LinkProps>(({ theme }) => ({
  color: theme.palette.error.main,
  fontFamily: INTER,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "-0.347px",
  cursor: "pointer",
}));
