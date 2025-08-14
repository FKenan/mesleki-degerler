import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import { useEffect } from "react";
import Value from "./Value";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchValues } from "../ValuesExercise/valueSlice";

export default function HomePage() {
  const { values, isLoaded } = useSelector((state) => state.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
          p: 6,
        }}
      >
        <Container maxWidth="xl">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
            <Stack spacing={6} alignItems="center">
              <Stack spacing={2} alignItems="center">
                <Typography
                  variant="h3"
                  color="primary.dark"
                  fontWeight={700}
                  textAlign="center"
                >
                  Kendini ve Meslekleri Tanı!
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  textAlign="center"
                >
                  Mesleki değerlerine uygun bölümleri keşfet, kariyer
                  yolculuğunda kendine en uygun adımı at!
                </Typography>
                <Button
                  component={Link}
                  to="/exercise"
                  variant="contained"
                  size="large"
                  endIcon={<StartIcon />}
                  sx={{ mt: 2, px: 4, py: 1.5, fontWeight: 600 }}
                >
                  Hemen Başla
                </Button>
              </Stack>

              <Divider
                flexItem
                sx={{ borderBottomWidth: "3px", width: "80%" }}
              />

              <Stack spacing={2} alignItems="center">
                <Typography variant="h4" color="primary.main" fontWeight={700}>
                  Mesleki Değerlerim
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  fontWeight={500}
                  textAlign="center"
                >
                  “Değerler, kararlarımızı, davranışlarımızı ve genel tatmin
                  duygumuzu şekillendiren yol gösterici ilkeler olarak hizmet
                  eder.”
                </Typography>
              </Stack>

              <Grid container spacing={3} justifyContent="center">
                {values.map((value) => (
                  <Value key={value.id} value={value} />
                ))}
              </Grid>

              <Divider
                flexItem
                sx={{ borderBottomWidth: "2px", width: "70%" }}
              />

              <Stack spacing={2} alignItems="center">
                <Typography
                  variant="h5"
                  color="info.dark"
                  fontWeight={700}
                  textAlign="center"
                >
                  Değerlerinize Uygun Bir Kariyer, Mutlu Bir Gelecek!
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="center"
                >
                  Temel değerlerinizle uyumlu bir kariyer seçimi, profesyonel
                  yaşamınızda daha yüksek memnuniyet ve başarı getirir.
                </Typography>
                <Button
                  component={Link}
                  to="/exercise"
                  variant="outlined"
                  size="large"
                  endIcon={<StartIcon />}
                  sx={{ mt: 1, px: 4, py: 1.2, fontWeight: 600 }}
                >
                  Değerlerime Göre Bölüm Bul
                </Button>
              </Stack>
            </Stack>
          </Paper>
          <Footer />
        </Container>
      </Box>
    </>
  );
}
