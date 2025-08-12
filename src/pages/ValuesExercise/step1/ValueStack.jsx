import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToDiscardPile, addToKeepPile } from "../valueSlice";
import { useDrag } from "react-dnd";

export default function ValueStack({ value }) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "VALUE",
    item: { id: value.id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();
  return (
    <Box
      ref={dragRef}
      sx={{
        borderRadius: 4,
        width: "90%",
        height: 260,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: isDragging ? 0.9 : 1,
        cursor: "grab",
        transition: "all 0.3s ease",
        "&:hover": {
          elevation: 10,
          transform: "translate(-50%, -52%)",
        },
      }}
    >
      <Card
        ref={dragRef}
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: 4,
          textAlign: "center",
          position: "relative",
        }}
      >
        <CardActionArea
          onClick={() => dispatch(addToDiscardPile(value))}
          sx={{
            borderRadius: 0,
            position: "absolute",
            width: "25%",
            height: "100%",
            left: 0,
            ":hover": { bgcolor: "error.main", opacity: 0.6 },
          }}
        ></CardActionArea>
        <CardActionArea
          onClick={() => dispatch(addToKeepPile(value))}
          sx={{
            borderRadius: 0,
            position: "absolute",
            width: "25%",
            height: "100%",
            right: 0,
            ":hover": { bgcolor: "success.main", opacity: 0.6 },
          }}
        ></CardActionArea>
        <Typography variant="subtitle2" fontWeight="bold" my={1}>
          {value.ad}
        </Typography>
        <CardContent sx={{ py: 0 }}>
          <Typography variant="caption" sx={{ lineHeight: 1 }}>
            {value.aciklama}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
