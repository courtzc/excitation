import "./Header.css";
import { AppBar, Toolbar, Typography } from "@mui/material";


export const Header = () => {
  return (
    <AppBar position="static" className="gradient-appbar" >
      <Toolbar className="centered-toolbar" sx={{width: '85%', margin: '0 auto'}}>
        <Typography variant="h4" component="div" className="header-text">
          Excitation
        </Typography>
      </Toolbar>
    </AppBar>
  );
};