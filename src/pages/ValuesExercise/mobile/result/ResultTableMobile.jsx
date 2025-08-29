import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "../../result/resultSlice";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
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
        height: "100%",
        overflowY: "auto",
        p: { xs: 1, sm: 2 },
      }}
    >
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredTableData.length === 0 ? (
        <Typography sx={{ mt: 4, textAlign: "center" }}>
          Seçtiğiniz değerlere uygun bölüm bulunamadı.
        </Typography>
      ) : (
        <Stack spacing={2}>
          {filteredTableData.map((row) => (
            <Card
              key={row.id}
              variant="outlined"
              sx={(theme) => ({
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                transition: "box-shadow 0.3s, border-color 0.3s",
                "&:hover": {
                  boxShadow: theme.shadows[4],
                  borderColor: "primary.main",
                },
              })}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}
                >
                  <SchoolIcon
                    sx={{
                      mr: 1.5,
                      mt: 0.5,
                      color: "primary.main",
                      fontSize: { xs: "1.5rem", sm: "1.75rem" },
                    }}
                  />
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="700">
                      {row.bolumAd}
                    </Typography>
                    {row.bolumAciklama && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {row.bolumAciklama}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 1, fontWeight: "500" }}
                  >
                    İlgili Değerler
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {row.degerler.map((deger) => (
                      <Chip
                        key={deger.id}
                        label={deger.ad}
                        size="small"
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}
