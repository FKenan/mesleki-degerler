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
import { useDispatch, useSelector } from "react-redux";
import { handleReset, VALUE_EXERCISE_STEPS } from "./valueSlice";

export default function Appbar() {
  const { activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar disableGutters sx={{ px: 2 }}>
        <Grid container spacing={2} width="100%" alignItems="center">
          <Grid
            size={{ xs: 12, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <HomeIcon color="primary" sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Mesleki Değerler
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Stepper activeStep={activeStep}>
              {VALUE_EXERCISE_STEPS.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 3 }}
            display="flex"
            justifyContent={{ xs: "space-between", sm: "flex-end" }}
          >
            <Button
              size="small"
              onClick={() => dispatch(handleReset())}
              sx={{ mr: 1, p: 0 }}
            >
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
