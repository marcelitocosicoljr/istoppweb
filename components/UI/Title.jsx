import { Typography } from "@mui/material";

const Title = ({
  children,
  variant = "h3",
  color = "primary",
  fontWeight = 800,
  sx = "",
}) => {
  return (
    <Typography fontWeight={fontWeight} variant={variant} color={color} sx={sx}>
      {children}
    </Typography>
  );
};

export default Title;
