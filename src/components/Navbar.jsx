import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              transition: "opacity 0.2s",
              "&:hover": {
                opacity: 0.85,
              },
            }}
          >
            <HomeIcon sx={{ mr: 1 }} />
            Mesleki Değerler
          </Typography>
          <ThemeSelector />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
