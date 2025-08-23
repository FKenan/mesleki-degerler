import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
  alpha,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function ValueCardMobile({
  value,
  isSelected,
  handleToggle,
  first5Value,
}) {
  const isDisabled = !isSelected && first5Value.length >= 5;

  return (
    <Card
      elevation={isSelected ? 8 : 4}
      sx={(theme) => ({
        mb: 2,
        borderRadius: 4,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        border: "2px solid",
        borderColor: isSelected ? "primary.main" : "transparent",
        transform: isSelected ? "scale(1.02)" : "scale(1)",
        backgroundColor: isSelected
          ? theme.custom?.highlight?.background ||
            alpha(theme.palette.primary.main, 0.1)
          : "background.paper",
      })}
    >
      <CardActionArea
        onClick={() => handleToggle(value, isSelected)}
        disabled={isDisabled}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "12px !important",
            px: 2,
          }}
        >
          <Typography variant="h6" component="span">
            {value.ad}
          </Typography>
          <Checkbox
            tabIndex={-1}
            edge="end"
            size="large"
            checked={isSelected}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
            sx={{
              pointerEvents: "none",
              color: isSelected ? "primary.main" : "inherit",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
