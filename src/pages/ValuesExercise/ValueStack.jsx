import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

export default function ValueStack({ value, index }) {
  return (
    <Box position="absolute" top={-120}>
      <Card
        sx={{
          minHeight: 250,
          borderRadius: 5,
          textAlign: "center",
          position: "relative",
        }}
      >
        <CardActionArea
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
          Başlık
        </Typography>
        <CardContent sx={{ py: 0 }}>
          <Typography variant="caption" sx={{ lineHeight: 1 }}>
            Hakkaniyet, eşitlik ve doğru olanın peşinden gidilmesini vurgular.
            Etik ilkeleri destekleme, sosyal eşitliği teşvik etmeve bireylere
            adil ve tarafsız davranılmasını sağlama inancını yansıtır.
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="subtitle2" align="center">
        Kalan değer adeti
      </Typography>
    </Box>
  );
}
