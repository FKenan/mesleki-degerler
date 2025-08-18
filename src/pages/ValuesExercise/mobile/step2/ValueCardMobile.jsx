import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function ValueCardMobile({
  value,
  isSelected,
  handleToggle,
  first5Value,
}) {
  return (
    <Card
      key={value.id}
      elevation={isSelected ? 8 : 4}
      sx={{
        mb: 2,
        borderRadius: 4,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        border: "2px solid",
        borderColor: isSelected ? "primary.main" : "transparent",
        backgroundColor: isSelected
          ? "rgba(33, 150, 243, 0.08)"
          : "background.paper",
      }}
    >
      <CardActionArea
        onClick={() => handleToggle(value, isSelected)}
        disabled={!isSelected && first5Value.length >= 5}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1,
          }}
        >
          <Typography variant="h6">{value.ad}</Typography>
          <Checkbox
            edge="end"
            size="large"
            checked={isSelected}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
            disabled={!isSelected && first5Value.length >= 5}
            sx={{ color: isSelected ? "primary.main" : "inherit" }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
