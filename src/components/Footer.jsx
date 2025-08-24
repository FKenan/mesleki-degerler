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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ListSubheader>
        <Divider />
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <PhoneIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText secondary="(000) 000 00 00" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <MailOutlineIcon />
          </ListItemIcon>
          <ListItemText secondary="info@example.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText secondary="Instagram" />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ minWidth: 30, pb: 0 }}>
            <PlaceIcon />
          </ListItemIcon>
          <ListItemText secondary="Lorem Street No:123, Ipsum City" />
        </ListItem>
      </List>
    </Box>
  );
}
