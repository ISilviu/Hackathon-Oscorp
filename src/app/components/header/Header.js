import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Link as MuiLink, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { LOGIN_URL, REGISTER_URL } from "./Header.constants";

import './Header.css';

const Header = () => {
    return (
        <AppBar position="fixed" color='grey'>
        <Toolbar>
          <Stack direction="row" flex={1} spacing={3}>

            <img src="images/logo.png" 
                className="logo"></img>

            <Link to="/account" underline="none" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="outlined" className="primary-olbtn">Features</Button>
            </Link>

            <Link to="/account" underline="none" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="outlined" className="primary-olbtn">Why this app</Button>
            </Link>

            <Link to="/account" underline="none" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="outlined" className="primary-olbtn">Pricing</Button>
            </Link>

            <Link to="/reviews" underline="none" style={{ textDecoration: 'none', color: 'inherit'}}>
                <Button variant="outlined" className="primary-olbtn">Reviews</Button>
            </Link>

          </Stack>
          <div className="UserButtons">
            <MuiLink
            underline="none"
              href={LOGIN_URL}
            >
              <Button className="secondary-btn" variant="contained">Sign In</Button>
            </MuiLink>
            
            <MuiLink
                underline="none"
                href={REGISTER_URL}
                >
                <Button className="primary-btn" variant="contained">Register</Button>
            </MuiLink>
          </div>
        </Toolbar>
      </AppBar>
    )
}

export default Header;