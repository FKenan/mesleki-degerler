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

export default function AppbarMobile() {
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
        <Grid container spacing={1} width="100%" alignItems="center">
          <Grid size={6} display="flex" alignItems="center">
            <HomeIcon color="primary" sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              noWrap
              sx={{
                color: "primary.main",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Mesleki Değerler
            </Typography>
          </Grid>
          <Grid size={6} display="flex" justifyContent="flex-end">
            <Button
              size="small"
              onClick={() => dispatch(handleReset())}
              sx={{ mr: 1, p: 0 }}
            >
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
