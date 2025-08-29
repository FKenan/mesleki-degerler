import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

function Value({ value, action }) {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "VALUE",
    item: { id: value.id, value },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => action !== null,
  });

  const handleClick = useCallback(() => {
    if (action) {
      dispatch(action(value));
    }
  }, [dispatch, action, value]);

  const cardSx = useMemo(
    () => (theme) => ({
      borderRadius: 3,
      minHeight: 40,
      height: "100%",
      borderColor: "primary.light",
      opacity: isDragging ? 0.5 : 1,
      cursor: action ? "grab" : "default",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: action ? "translateY(-4px)" : "none",
        boxShadow: action ? theme.custom.cardHoverShadow : "none",
      },
    }),
    [isDragging, action]
  );

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4, xl: 3 }}>
      <Card ref={dragRef} elevation={3} sx={cardSx}>
        <CardActionArea
          disabled={action === null}
          sx={{ height: "100%" }}
          onClick={handleClick}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              p: 1,
            }}
          >
            <Typography
              variant="body2"
              fontSize={12}
              fontWeight="600"
              color="primary"
              align="center"
              sx={{ flexGrow: 1, mr: 0.5 }}
            >
              {value.ad}
            </Typography>
            <Tooltip
              title={value.aciklama}
              arrow
              slotProps={{
                tooltip: {
                  sx: (theme) => ({
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[800],
                    color: theme.palette.common.white,
                    fontSize: "13px",
                    padding: "8px",
                    borderRadius: "8px",
                  }),
                },
                arrow: {
                  sx: (theme) => ({
                    color:
                      theme.palette.mode === "dark"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[800],
                  }),
                },
              }}
            >
              <InfoOutlined
                fontSize="small"
                sx={{ color: "action.active", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </Tooltip>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default React.memo(Value);
