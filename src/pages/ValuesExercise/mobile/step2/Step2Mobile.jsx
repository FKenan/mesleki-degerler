import { memo, useCallback, useMemo } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFirst5Value,
  addToKeepPile,
  selectFirst5Value,
  selectKeepPile,
} from "../../valueSlice";
import ExercisePageTypography from "../../ExercisePageTypography";
import NextButtonMobile from "../NextButtonMobile";
import ValueCardMobile from "./ValueCardMobile";
import BackButtonMobile from "../BackButtonMobile";
import AnimatedDiv from "../../../../components/animations/AnimatedDiv";

// Constants
const mainBoxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "65vh",
  padding: 2,
  gap: 2,
};
const valuesContainerSx = {
  width: "100%",
  maxWidth: 500,
  overflowY: "auto",
  p: 1,
  height: "calc(100vh - 200px)",
};
const buttonContainerSx = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};

function Step2Mobile({ direction }) {
  const dispatch = useDispatch();
  const keepPile = useSelector(selectKeepPile);
  const first5Value = useSelector(selectFirst5Value);

  const handleToggle = useCallback(
    (value, isSelected) => {
      if (isSelected) {
        dispatch(addToKeepPile(value));
      } else {
        if (first5Value.length < 5) {
          dispatch(addToFirst5Value(value));
        }
      }
    },
    [dispatch, first5Value.length]
  );

  const allValues = useMemo(
    () => [...keepPile, ...first5Value].sort((a, b) => a.id - b.id),
    [keepPile, first5Value]
  );

  return (
    <AnimatedDiv direction={direction}>
      <Box sx={mainBoxSx}>
        <ExercisePageTypography
          title="En Önemli 5 Değeri Seçin"
          subtitle1="Sizin için en anlamlı 5 değeri seçerek devam edin."
          subtitle2={`${first5Value.length} / 5 Değer Seçildi`}
        />
        <Box sx={valuesContainerSx}>
          {allValues.map((value) => {
            const isSelected = first5Value.some((v) => v.id === value.id);
            return (
              <ValueCardMobile
                key={value.id}
                value={value}
                isSelected={isSelected}
                handleToggle={handleToggle}
                first5Value={first5Value}
              />
            );
          })}
        </Box>
        <Box sx={buttonContainerSx}>
          <BackButtonMobile />
          <NextButtonMobile />
        </Box>
      </Box>
    </AnimatedDiv>
  );
}

export default memo(Step2Mobile);
