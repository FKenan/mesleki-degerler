import { Box, Button, ButtonGroup, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { applyFilter, setMatchFilter } from "./resultSlice";
import { memo, useCallback } from "react";

function ResultFilter({ first5Value }) {
  const dispatch = useDispatch();
  const matchFilter = useSelector((state) => state.result.matchFilter);

  const handleFilterChange = useCallback(
    (newFilterValue) => {
      dispatch(setMatchFilter(newFilterValue));
      dispatch(applyFilter({ first5Value }));
    },
    [dispatch, first5Value]
  );

  return (
    <Box sx={{ width: "auto", my: 2, px: 4 }}>
      <Stack spacing={1.5} alignItems="center" textAlign="center">
        <Typography gutterBottom>Eşleşme Filtresi</Typography>
        <Typography variant="body2" display="block" gutterBottom align="center">
          Seçtiğiniz 5 öncelikli değerden en az kaç tanesinin bölümde bulunması
          gerektiğini seçin.
        </Typography>
        <ButtonGroup variant="outlined" aria-label="Eşleşme sayısı filtresi">
          {[1, 2, 3].map((value) => (
            <Button
              key={value}
              variant={matchFilter === value ? "contained" : "outlined"}
              onClick={() => handleFilterChange(value)}
              sx={{
                ...(matchFilter === value && {
                  fontWeight: "bold",
                  boxShadow: 1,
                }),
              }}
            >
              En Az {value}
            </Button>
          ))}
        </ButtonGroup>
      </Stack>
    </Box>
  );
}

export default memo(ResultFilter);
