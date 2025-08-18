import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "../../result/resultSlice";
import {
  Card,
  CardContent,
  Typography,
  Link,
  Grid,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ResultTableMobile() {
  const { first5Value } = useSelector((state) => state.value);
  const { tableData, isLoading } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData(first5Value));
  }, [dispatch, first5Value]);

  return (
    <Grid container spacing={2} sx={{ p: 2, justifyContent: "center" }}>
      {isLoading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : tableData.length === 0 ? (
        <Typography sx={{ mt: 4 }}>
          Seçtiğiniz değerlere uygun bölüm bulunamadı.
        </Typography>
      ) : (
        tableData.map((row) => (
          <Grid size={12} key={row.id}>
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                borderRadius: 2,
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" component="div" fontWeight="bold">
                    {row.bolumAd}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.fakulteAd}
                  </Typography>
                  <Box sx={{ pt: 1 }}>
                    <Typography variant="body2" gutterBottom>
                      <strong>Öğrenim Düzeyi:</strong> {row.durum}
                    </Typography>
                    <Typography variant="body2">
                      <strong>İlgili Değerler:</strong>{" "}
                      {row.degerler.map((deger) => deger.ad).join(", ")}
                    </Typography>
                  </Box>
                  <Link
                    href={row.fakulteUrl}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      mt: 2,
                    }}
                  >
                    Bölüm Websitesi
                    <ArrowForwardIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
