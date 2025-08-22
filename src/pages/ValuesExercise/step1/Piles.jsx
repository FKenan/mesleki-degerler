import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ValuesPile from "../ValuesPile";
import ValueStack from "../step1/ValueStack";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDiscardPile,
  addToKeepPile,
  selectDiscardPile,
  selectIsLoaded,
  selectKeepPile,
  selectValueStack,
} from "../valueSlice";
import React, { useCallback } from "react";

function Piles() {
  const valueStack = useSelector(selectValueStack);
  const keepPile = useSelector(selectKeepPile);
  const discardPile = useSelector(selectDiscardPile);
  const isloaded = useSelector(selectIsLoaded);

  const dispatch = useDispatch();

  const handleDropDiscard = useCallback(
    (value) => {
      dispatch(addToDiscardPile(value));
    },
    [dispatch]
  );

  const handleDropKeep = useCallback(
    (value) => {
      dispatch(addToKeepPile(value));
    },
    [dispatch]
  );

  return (
    <Grid size={12} container spacing={3} alignItems="stretch" px={3}>
      <Grid size="grow">
        <ValuesPile
          title="Atılacaklar Kutusu"
          values={discardPile}
          action={addToKeepPile}
          onDrop={handleDropDiscard}
        />
      </Grid>
      <Grid
        size={2}
        minWidth={215}
        minHeight={350}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!isloaded ? (
            <CircularProgress />
          ) : valueStack.length > 0 ? (
            <Box position="relative" display="flex" height="100%" width="100%">
              {valueStack.map((value) => (
                <ValueStack value={value} key={value.id} />
              ))}
            </Box>
          ) : (
            <Typography variant="h6" color="text.secondary">
              Tüm değerleri grupladınız. <br /> Sonraki adıma geçebilirsiniz.
            </Typography>
          )}
        </Box>
        <Typography variant="subtitle2" align="center">
          {`Kalan Değerler: ${valueStack.length}`}
        </Typography>
      </Grid>
      <Grid size="grow">
        <ValuesPile
          title="Tutulacaklar Kutusu"
          values={keepPile}
          action={addToDiscardPile}
          onDrop={handleDropKeep}
        />
      </Grid>
    </Grid>
  );
}

export default React.memo(Piles);
