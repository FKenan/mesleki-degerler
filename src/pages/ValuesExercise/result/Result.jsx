import { memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Container, Box } from "@mui/material";
import ResultTable from "./ResultTable";
import ResultFilter from "./filter";
import { selectFirst5Value } from "../valueSlice";
import { applyFilter } from "./resultSlice";
import ResultPageHeader from "./ResultPageHeader";

function ResultPage() {
  const dispatch = useDispatch();
  const first5Value = useSelector(selectFirst5Value);

  useEffect(() => {
    dispatch(applyFilter({ first5Value }));
  }, [first5Value, dispatch]);

  const secilenDegerlerText = useMemo(
    () => first5Value.map((value) => value.ad).join(", "),
    [first5Value]
  );

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        <ResultPageHeader secilenDegerlerText={secilenDegerlerText} />

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ResultFilter first5Value={first5Value} />
        </Box>

        <ResultTable />
      </Container>
    </Slide>
  );
}

export default memo(ResultPage);
