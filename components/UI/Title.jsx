import { Typography } from "@mui/material";

const Title = ({
  children,
  variant = "h3",
  color = "primary",
  fontWeight = 800,
}) => {
  return (
    <Typography fontWeight={fontWeight} variant={variant} color={color}>
      {children}
    </Typography>
  );
};

export default Title;
