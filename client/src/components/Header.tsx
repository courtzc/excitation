import "./Header.css";
import { AppBar, Toolbar, Typography } from "@mui/material";


export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #37527e, #4e3274)', width: '100%' }}>
      <Toolbar className="centered-toolbar" sx={{width: '85%', margin: '0 auto'}}>
        <Typography variant="h4" component="div" className="header-text">
          Excitation
        </Typography>
      </Toolbar>
    </AppBar>
  );
};