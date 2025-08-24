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
import { selectFirst5Value } from "../../valueSlice";

export default function ResultTableMobile() {
  const first5Value = useSelector(selectFirst5Value);

  const { filteredTableData, isLoading } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData(first5Value));
  }, [dispatch, first5Value]);

  return (
    <Box
      sx={{
        p: 2,
        height: "calc(100vh - 200px)",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : filteredTableData.length === 0 ? (
        <Typography sx={{ mt: 4 }}>
          Seçtiğiniz değerlere uygun bölüm bulunamadı.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ width: "100%", maxWidth: "md" }}>
          {filteredTableData.map((row) => (
            <Grid size={12} key={row.id}>
              <Card
                variant="outlined"
                sx={(theme) => ({
                  width: "100%",
                  borderRadius: 2,
                  transition:
                    "box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out",
                  borderColor: theme.custom.interactiveCard.borderColor,
                  "&:hover": {
                    boxShadow: theme.custom.cardHoverShadow,
                    borderColor: theme.custom.interactiveCard.borderColorHover,
                  },
                })}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        fontWeight="bold"
                      >
                        {row.bolumAd}
                      </Typography>
                      <Typography color="text.secondary">
                        {row.fakulteAd}
                      </Typography>
                    </Box>
                    <Stack spacing={1.5}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          Öğrenim Düzeyi
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          {row.durum}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          İlgili Değerler
                        </Typography>
                        <Typography variant="body2">
                          {row.degerler.map((deger) => deger.ad).join(", ")}
                        </Typography>
                      </Box>
                    </Stack>

                    <Link
                      href={row.fakulteUrl}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        alignSelf: "flex-start",
                        fontWeight: "bold",
                        pt: 1,
                      }}
                    >
                      Bölüm Websitesi
                      <ArrowForwardIcon sx={{ ml: 0.5, fontSize: "1rem" }} />
                    </Link>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
