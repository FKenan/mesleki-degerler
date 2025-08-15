import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

export default function Value({ value, action }) {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "VALUE",
    item: { id: value.id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => action !== null,
  });

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}>
      <Card
        ref={dragRef}
        elevation={3}
        sx={{
          borderRadius: 3,
          minHeight: 40,
          height: "100%",
          borderColor: "primary.light",
          opacity: isDragging ? 0.5 : 1,
          cursor: action ? "grab" : "default",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: action ? "translateY(-4px)" : "none",
            boxShadow: action ? "0px 4px 20px rgba(0,0,0,0.1)" : "none",
          },
        }}
      >
        <CardActionArea
          disabled={action === null}
          sx={{ height: "100%" }}
          onClick={() => dispatch(action(value))}
        >
          <Typography
            variant="body2"
            fontSize={12}
            fontWeight="600"
            color="primary"
            align="center"
          >
            {value.ad}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
