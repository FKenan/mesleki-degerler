import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

export default function Value({ value, action, onDrop }) {
  const dispatch = useDispatch();

  // Drag için
  const [{ isDragging }, dragRef] = useDrag({
    type: "VALUE",
    item: { id: value.id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Drop için
  const [, dropRef] = useDrop({
    accept: "VALUE",
    drop: (item) => {
      if (onDrop && item.id !== value.id) {
        onDrop(item.value, value);
      }
    },
  });

  return (
    <Grid size={{ md: 3, l: 4 }}>
      <Card
        ref={(node) => dragRef(dropRef(node))}
        variant="outlined"
        sx={{
          borderRadius: 3,
          minHeight: 40,
          height: "100%",
          borderColor: "primary.light",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <CardActionArea
          disabled={action === null}
          sx={{ height: "100%" }}
          onClick={() => dispatch(action(value))}
        >
          <Typography
            p={0.5}
            variant="body2"
            fontSize={12}
            fontWeight="bold"
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
