import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Typography,
  alpha,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

export default function ValueCardMobile({
  value,
  isSelected,
  handleToggle,
  first5Value,
}) {
  const [open, setOpen] = useState(false);
  const isDisabled = !isSelected && first5Value.length >= 5;

  const handleOpen = (e) => {
    e.stopPropagation(); // icon tıklanınca üst(card) olayların tetiklenmesini engeller
    setOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <>
      <Card
        elevation={isSelected ? 8 : 4}
        sx={(theme) => ({
          mb: 2,
          borderRadius: 4,
          transition:
            "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out",
          border: "2px solid",
          borderColor: isSelected ? "primary.main" : "transparent",
          transform: isSelected ? "scale(1.02)" : "scale(1)",
          backgroundColor: isSelected
            ? theme.custom?.highlight?.background ||
              alpha(theme.palette.primary.main, 0.1)
            : "background.paper",
          opacity: isDisabled ? 0.6 : 1,
        })}
      >
        <CardActionArea
          onClick={() => !isDisabled && handleToggle(value, isSelected)}
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" component="span">
                {value.ad}
              </Typography>
              <IconButton
                aria-label="info"
                onClick={handleOpen}
                sx={{ ml: 0.5, p: "6px" }}
              >
                <InfoOutlinedIcon fontSize="medium" />
              </IconButton>
            </Box>
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{value.ad}</DialogTitle>
        <DialogContent>
          <DialogContentText>{value.aciklama}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
