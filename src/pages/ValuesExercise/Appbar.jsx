import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Step,
  StepLabel,
  Stepper,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router";

export default function Appbar({ handleReset, activeStep, steps }) {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar disableGutters>
        <Grid container spacing={2} width="100%" alignItems="center">
          <Grid size={3} display="flex">
            <HomeIcon color="primary" sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: "primary.main",
                fontFamily: "monospace",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Mesleki Değerler
            </Typography>
          </Grid>
          <Grid size={6} justifyContent="start">
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                return (
                  <Step key={label} sx={{ px: 2 }}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Grid size={3} display="flex" justifyContent="end">
            <Button size="small" onClick={handleReset} sx={{ mr: 1, p: 0 }}>
              Baştan başla
            </Button>
            <IconButton color="primary" size="large" component={Link} to="/">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
