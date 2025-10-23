import type { StylesType } from "../../types/styles.type";
import { StyledDefaultButton } from "./DefaultButton.styled";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
interface IDefaultButtonProps {
  variant?: "contained" | "outlined";
  type?: "button" | "submit" | "reset";
  styles?: StylesType;
  borderradius?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  isSelected?: "true";
  gobletColor?: "gold" | "silver" | "brown";
  onClick?: (values?: unknown) => void;
  children: React.ReactNode | string;
}

const DefaultButton = ({
  variant,
  type,
  styles,
  borderradius,
  width,
  height,
  isDisabled,
  isSelected,
  gobletColor,
  onClick,
  children,
}: IDefaultButtonProps) => {
  return (
    <StyledDefaultButton
      variant={variant}
      type={type}
      borderradius={borderradius}
      width={width}
      height={height}
      disabled={isDisabled}
      isselected={isSelected}
      sx={styles}
      onClick={onClick}
      startIcon={
        gobletColor ? (
          <EmojiEventsIcon sx={{ color: `${gobletColor}` }} />
        ) : undefined
      }
    >
      {children}
    </StyledDefaultButton>
  );
};

export default DefaultButton;
