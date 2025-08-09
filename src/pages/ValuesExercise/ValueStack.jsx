import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToDiscardPile, addToKeepPile } from "./valueSlice";

export default function ValueStack({ value }) {
  const dispatch = useDispatch();
  return (
    <Box position="absolute" top={70}>
      <Card
        sx={{
          height: 250,
          width: 215,
          borderRadius: 5,
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
        <Typography variant="subtitle1" fontWeight="bold" marginTop={1}>
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
