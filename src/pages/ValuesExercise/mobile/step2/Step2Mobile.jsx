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
import { motion } from "framer-motion";

export default function Step2Mobile({ direction }) {
  const dispatch = useDispatch();
  const keepPile = useSelector(selectKeepPile);
  const first5Value = useSelector(selectFirst5Value);

  const handleToggle = (value, isSelected) => {
    if (isSelected) {
      dispatch(addToKeepPile(value));
    } else {
      if (first5Value.length < 5) {
        dispatch(addToFirst5Value(value));
      }
    }
  };

  const allValues = [...keepPile, ...first5Value].sort((a, b) => a.id - b.id);

  const pageVariants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? 100 : -100, // Start from right for forward, left for backward
    },
    in: {
      opacity: 1,
      x: 0, // Animate to center
    },
    out: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100, // Animate to left for forward, right for backward
    },
  };

  return (
    <motion.div
      key="step2-mobile-page" // Unique key for this page component
      initial="initial"
      animate="in" // Always animate in when mounted by AnimatePresence
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "65vh",
          padding: 2,
          gap: 2,
        }}
      >
        <ExercisePageTypography
          title="En Önemli 5 Değeri Seçin"
          subtitle1="Sizin için en anlamlı 5 değeri seçerek devam edin."
          subtitle2={`${first5Value.length} / 5 Değer Seçildi`}
        />
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            overflowY: "auto",
            p: 1,
            height: "calc(100vh - 200px)",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <BackButtonMobile />
          <NextButtonMobile />
        </Box>
      </Box>
    </motion.div>
  );
}
