import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SchoolIcon from "@mui/icons-material/School";
import StartIcon from "@mui/icons-material/Start";
import { useEffect } from "react";
import Value from "./Value";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchValues,
  selectIsLoaded,
  selectValues,
} from "../ValuesExercise/valueSlice";

const howItWorksSteps = [
  {
    icon: <SearchIcon fontSize="large" color="primary" />,
    title: "1. Değerlerini Keşfet",
    description:
      "Geniş bir değer listesi üzerinden senin için önemli ve önemsiz olanları gruplayarak ilk adımı at.",
  },
  {
    icon: <CheckCircleOutlineIcon fontSize="large" color="primary" />,
    title: "2. Önceliklendir",
    description:
      "Önemli olarak belirlediğin değerler arasından en kritik 5 tanesini seçerek kişisel değer haritanı oluştur.",
  },
  {
    icon: <SchoolIcon fontSize="large" color="primary" />,
    title: "3. Bölüm Önerilerini Gör",
    description:
      "Belirlediğin 5 temel değere en uygun üniversite bölümlerini ve kariyer yollarını anında keşfet.",
  },
];

export default function HomePage() {
  const isLoaded = useSelector(selectIsLoaded);
  const values = useSelector(selectValues);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            pt: { xs: 8, md: 12 },
            pb: { xs: 10, md: 16 },
            textAlign: "center",
            background: (theme) =>
              theme.palette.mode === "light"
                ? `linear-gradient(180deg, ${
                    theme.palette.grey[100]
                  } 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`
                : `linear-gradient(180deg, ${
                    theme.palette.grey[900]
                  } 0%, ${alpha(theme.palette.primary.dark, 0.2)} 100%)`,
          }}
        >
          <Container maxWidth="md">
            <Stack spacing={2} alignItems="center">
              <Typography
                variant="h2"
                component="h1"
                fontWeight={800}
                sx={{
                  color: "text.primary",
                  letterSpacing: "-1px",
                }}
              >
                Kariyer Yolculuğunda İlk Adım:
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  Değerlerini Keşfet
                </Box>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: "600px", fontWeight: 400 }}
              >
                Bu interaktif egzersizle mesleki değerlerini belirle, sana en
                uygun üniversite bölümlerini ve kariyer yollarını keşfet.
              </Typography>
              <Button
                component={Link}
                to="/exercise"
                variant="contained"
                size="large"
                endIcon={<StartIcon />}
                sx={{
                  mt: 2,
                  px: 5,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  boxShadow: (theme) =>
                    `0 8px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                }}
              >
                Hemen Başla
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }}>
          <Stack spacing={10} alignItems="center">
            {/* How It Works Section */}
            <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                fontWeight={700}
                color="text.primary"
              >
                Nasıl Çalışır?
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {howItWorksSteps.map((step, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                    <Paper
                      variant="outlined"
                      sx={{
                        p: { xs: 2, sm: 3 },
                        height: "100%",
                        textAlign: "center",
                        borderRadius: 3,
                        bgcolor: "background.paper",
                        borderColor: "divider",
                      }}
                    >
                      <Box sx={{ mb: 2, color: "primary.main" }}>
                        {step.icon}
                      </Box>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Stack>

            {/* Values Preview Section */}
            <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                fontWeight={700}
                color="text.primary"
              >
                Mesleki Değerler Neden Önemli?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ maxWidth: "750px" }}
              >
                Değerlerinle uyumlu bir kariyer, sadece iş tatmini sağlamakla
                kalmaz, aynı zamanda motivasyonunu artırır ve uzun vadeli
                başarının kapılarını aralar. İşte keşfedeceğin değerlerden
                bazıları:
              </Typography>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ minHeight: 160, alignItems: "center" }}
              >
                {!isLoaded ? (
                  <CircularProgress />
                ) : (
                  values
                    .slice(0, 8)
                    .map((value) => <Value key={value.id} value={value} />)
                )}
              </Grid>
            </Stack>

            {/* Final CTA Section */}
            <Paper
              elevation={0}
              sx={{
                textAlign: "center",
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                width: "100%",
                maxWidth: "900px",
                background: (theme) =>
                  `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                color: "primary.contrastText",
              }}
            >
              <Stack spacing={2} alignItems="center">
                <Typography variant="h4" component="h2" fontWeight={700}>
                  Kariyer Yolculuğuna Hazır Mısın?
                </Typography>
                <Typography sx={{ maxWidth: "600px", opacity: 0.9 }}>
                  Geleceğini şekillendirecek bu önemli adımı atmak için daha
                  fazla bekleme. Değerlerini keşfet ve sana en uygun yolu hemen
                  bul.
                </Typography>
                <Button
                  component={Link}
                  to="/exercise"
                  variant="contained"
                  size="large"
                  color="secondary"
                  sx={{
                    mt: 2,
                    px: 5,
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "12px",
                    bgcolor: "background.paper",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "light"
                          ? "grey.100"
                          : "grey.700",
                    },
                  }}
                >
                  Egzersize Başla
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </Container>
        <Footer />
      </Box>
    </>
  );
}
