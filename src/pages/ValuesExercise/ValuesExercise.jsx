import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Appbar from "./Appbar";
import ResultPage from "./Result";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { fetchValues } from "./ValueSlice";
import { useDispatch, useSelector } from "react-redux";

const steps = ["1.Adım", "2.Adım", "Sonuçlar"];

export default function ValuesExercisePage() {
  const { values, valueStack, isLoaded, activeStep } = useSelector(
    (state) => state.value
  );
  const dispatch = useDispatch();

  const [keepPile, setKeepPile] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  const [first5Value, setFirst5Value] = useState([]);

  useEffect(() => {
    if (!isLoaded) dispatch(fetchValues());
  }, []);

  const addToKeepPile = (value) => {
    setKeepPile([...keepPile, value]);
    removeValue(value);
    removeValueFromDiscardPile(value);
    removeValueFromFirst5Value(value);
  };

  const addToDiscardPile = (value) => {
    setDiscardPile([...discardPile, value]);
    removeValue(value);
    removeValueFromKeepPile(value);
  };

  const addtoFirst5Value = (value) => {
    setFirst5Value([...first5Value, value]);
    removeValueFromKeepPile(value);
  };

  const removeValue = (value) => {
    setValueStack(valueStack.filter((x) => value.id !== x.id));
  };

  const removeValueFromKeepPile = (value) => {
    setKeepPile(keepPile.filter((x) => value.id !== x.id));
  };

  const removeValueFromDiscardPile = (value) => {
    setDiscardPile(discardPile.filter((x) => value.id !== x.id));
  };

  const removeValueFromFirst5Value = (value) => {
    setFirst5Value(first5Value.filter((x) => value.id !== x.id));
  };

  const handleReset = () => {
    setActiveStep(0);
    setKeepPile([]);
    setDiscardPile([]);
    setFirst5Value([]);
    setValueStack(values);
  };

  return (
    <Box height="100%" sx={{ mx: 2 }}>
      <Appbar handleReset={handleReset} activeStep={activeStep} steps={steps} />
      {activeStep === 0 && (
        <Step1
          addToKeepPile={addToKeepPile}
          addToDiscardPile={addToDiscardPile}
          keepPile={keepPile}
          discardPile={discardPile}
        />
      )}
      {activeStep === 1 && (
        <Step2
          addToKeepPile={addToKeepPile}
          addtoFirst5Value={addtoFirst5Value}
          keepPile={keepPile}
          first5Value={first5Value}
        />
      )}
      {activeStep === 2 && <ResultPage selectedValues={first5Value} />}
    </Box>
  );
}
