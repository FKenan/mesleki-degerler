import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import { memo, useCallback, useMemo } from "react";
import { addToDiscardPile, addToKeepPile } from "../valueSlice";

const cardSx = {
  height: "100%",
  width: "100%",
  borderRadius: 4,
  textAlign: "center",
  position: "relative",
};

const cardContentSx = { py: 0 };
const captionSx = { lineHeight: 1 };

const discardActionSx = {
  borderRadius: 0,
  position: "absolute",
  width: "25%",
  height: "100%",
  left: 0,
  ":hover": { bgcolor: "error.main", opacity: 0.6 },
};

const keepActionSx = {
  borderRadius: 0,
  position: "absolute",
  width: "25%",
  height: "100%",
  right: 0,
  ":hover": { bgcolor: "success.main", opacity: 0.6 },
};

function ValueStack({ value }) {
  const [, dragRef] = useDrag({
    type: "VALUE",
    item: { id: value.id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  const handleDiscard = useCallback(() => {
    dispatch(addToDiscardPile(value));
  }, [dispatch, value]);

  const handleKeep = useCallback(() => {
    dispatch(addToKeepPile(value));
  }, [dispatch, value]);

  const boxSx = useMemo(
    () => (theme) => ({
      borderRadius: 4,
      width: "90%",
      height: 260,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      cursor: "grab",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: theme.shadows[10],
        transform: "translate(-50%, -53%)",
        border: theme.custom.valueStack.borderHover,
      },
    }),
    []
  );

  return (
    <Box ref={dragRef} sx={boxSx}>
      <Card sx={cardSx}>
        <CardActionArea
          onClick={handleDiscard}
          aria-label="Bu değeri at"
          sx={discardActionSx}
        ></CardActionArea>
        <CardActionArea onClick={handleKeep} sx={keepActionSx}></CardActionArea>
        <Typography variant="subtitle2" fontWeight="bold" my={1}>
          {value.ad}
        </Typography>
        <CardContent sx={cardContentSx}>
          <Typography variant="caption" sx={captionSx}>
            {value.aciklama}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default memo(ValueStack);
