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
import { useDevice } from "../../context/DeviceContext";
import ThemeSelector from "../../components/ThemeSelector";

export default function Appbar() {
  const { activeStep } = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const { isMobile } = useDevice();

  return (
    <AppBar
      elevation={1}
      position="static"
      sx={{
        mt: { xs: 2, sm: 0 },
        backgroundColor: "background.paper",
        color: "text.primary",
      }}
    >
      <Toolbar disableGutters sx={{ px: 2 }}>
        <Grid container spacing={1} width="100%" alignItems="center">
          <Grid
            size={{ xs: 12, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <HomeIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "primary.main",
              }}
            >
              Mesleki Değerler
            </Typography>
          </Grid>
          {!isMobile && (
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
          )}
          <Grid
            size={{ xs: 12, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "space-between", sm: "flex-end" }}
          >
            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(handleReset())}
              sx={{ mr: 1, p: 0 }}
            >
              Baştan başla
            </Button>
            <IconButton color="inherit" size="large" component={Link} to="/">
              <CloseIcon />
            </IconButton>
            <ThemeSelector />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
