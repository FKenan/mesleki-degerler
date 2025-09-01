import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { handleReset } from "../valueSlice";
import { memo, useCallback } from "react";

// SX props as constants for performance
const appbarSx = {
  background: "transparent",
  boxShadow: "none",
};
const toolbarSx = { px: 2 };
const logoIconSx = { mr: 1 };
const logoTextSx = {
  color: "primary.main",
  fontWeight: 700,
  textDecoration: "none",
  fontSize: "1rem",
};
const resetButtonSx = { mr: 1, p: 0 };
const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
};

function AppbarMobile() {
  const dispatch = useDispatch();

  const handleResetClick = useCallback(() => {
    dispatch(handleReset());
  }, [dispatch]);

  return (
    <AppBar position="static" sx={appbarSx}>
      <Toolbar disableGutters sx={toolbarSx}>
        <Grid container spacing={1} width="100%" alignItems="center">
          <Grid size={6}>
            <Link to="/" style={logoContainerStyle}>
              <HomeIcon color="primary" sx={logoIconSx} />
              <Typography variant="body1" noWrap sx={logoTextSx}>
                Mesleki Değerler
              </Typography>
            </Link>
          </Grid>
          <Grid size={6} display="flex" justifyContent="flex-end">
            <Button size="small" onClick={handleResetClick} sx={resetButtonSx}>
              Baştan başla
            </Button>
            <IconButton
              color="primary"
              size="medium"
              component={Link}
              to="/"
              aria-label="Kapat"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default memo(AppbarMobile);
