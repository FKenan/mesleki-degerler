import {
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import { useEffect, useState } from "react";
import Value from "./Value";

export default function HomePage() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function getValues() {
      const res = await fetch("https://localhost:44316/api/Degerler/getall");
      const data = await res.json();
      setValues(data);
      await console.log(data);
    }
    getValues();
  }, []);

  return (
    <Container sx={{ mt: 5 }}>
      <Stack spacing={12} textAlign="center">
        <Stack
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4" color="text.primary">
            KENDİNİ VE MESLEKLERİ TANIMA REHBERİ
          </Typography>
          <Typography variant="h6" color="text.primary">
            Mesleki değerlerinize uygun bölümleri keşfedin!
          </Typography>
          <Button variant="contained" endIcon={<StartIcon />}>
            Başla
          </Button>
        </Stack>
        <Stack
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4" color="text.primary">
            <strong>Mesleki Değerlerim</strong>
          </Typography>
          <Divider flexItem sx={{ borderBottomWidth: "4px" }} />
          <Typography variant="h6" color="text.primary" fontWeight="500">
            "Değerler, kararlarımızı, davranışlarımızı ve genel tatmin duygumuzu
            şekillendiren yol gösterici ilkeler olarak hizmet eder."
          </Typography>
        </Stack>
        <Grid container spacing={4} justifyContent="center">
          {values.map((value) => (
            <Value key={value.id} value={value} />
          ))}
        </Grid>
        <Stack
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Typography variant="h4" color="info.dark">
            Mesleki Değerler Kararlarımızda Yol Gösterici İlkelerdir.
          </Typography>
          <Typography variant="h6" color="text.primary">
            Kariyer seçimlerimiz temel değerlerimizle uyumlu bir kariyer
            sonucunda, profesyonel yaşamımızda mennuniyet yaşama olaslığımız çok
            daha yüksektir.
          </Typography>
          <Typography variant="body1" color="text.primary" fontWeight="500">
            Değerlerinize uygun bölümleri bulmaya başlayın.
          </Typography>
          <Button variant="contained" endIcon={<StartIcon />}>
            Başla
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
