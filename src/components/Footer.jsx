import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";

export default function Footer() {
  return (
    <Box sx={{ my: 6, mx: 2 }} alignContent="center">
      <List>
        <ListSubheader>
          KARİYER PLANLAMA VE MEZUNLARLA İLİŞKİLER KOORDİNATÖRLÜĞÜ
        </ListSubheader>
        <Divider />
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <PhoneIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="0232 301 78 92" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText secondary="kariyerplanlama@deu.edu.tr" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText secondary="deu_kariyer" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText secondary="Dokuz Eylül Üniversitesi Tınaztepe Yerleşkesi, Buca - İzmir / Türkiye 35390" />
        </ListItem>
      </List>
    </Box>
  );
}
