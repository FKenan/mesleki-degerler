import {
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "./resultSlice";
import { selectFirst5Value } from "../valueSlice";
import SchoolIcon from "@mui/icons-material/School";

function ResultTable() {
  const first5Value = useSelector(selectFirst5Value);
  const { filteredTableData, isLoading } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData(first5Value));
  }, [dispatch, first5Value]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        width: "100%",
        my: 4,
        p: { xs: 1, sm: 2 },
        border: "none",
        backgroundColor: "transparent",
      }}
    >
      <Stack spacing={3}>
        {filteredTableData.map((row) => (
          <Card key={row.id} variant="outlined" sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <SchoolIcon
                      color="primary"
                      sx={{ mr: 1.5, fontSize: "2rem" }}
                    />
                    <Typography
                      component="h3"
                      fontWeight="700"
                      sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
                    >
                      {row.bolumAd}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ pl: { md: "44px" } }}
                  >
                    {row.bolumAciklama}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    component="h4"
                    gutterBottom
                  >
                    İlgili Değerler
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {row.degerler.map((deger) => (
                      <Chip
                        key={deger.id}
                        label={deger.ad}
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Paper>
  );
}

export default memo(ResultTable);
