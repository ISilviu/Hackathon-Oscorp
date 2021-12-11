import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, CardActions, CardContent, Link as MuiLink } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Link } from "react-router-dom";
import Footer from "./app/components/footer/Footer";
import { Card } from "@mui/material";
import "./App.css";

import ReviewsPage from "./app/pages/reviews-page/ReviewsPage";
import { useTheme } from "@emotion/react";
import { ThemeProvider } from "@mui/material/node_modules/@mui/system/node_modules/@mui/private-theming";

export default function App({ }) {

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <div className="Splash">
        <img src="/images/background.jpg" className="BgImg"
        />
        <Card className="Greeting">
          <CardContent>
            <Typography variant="h4" className="GreetingTitle">
              Start renting today!
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/rent-car" underline="none" style={{ textDecoration: 'none' }} className="GreetingButton">
              <Button variant="contained" color="primary" className="primary-btn">
                Browse Cars
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>

      {/* <Stack sx={{ flexGrow: 1 }}>
          <img alt="" src="https://media.discordapp.net/attachments/598933863548321794/918950270686334996/used-car.jpg" height={theme.spacing(70)} />
          <Stack direction="row" mt={4} height={90} bgcolor="#433434" alignItems="center" justifyContent="center" spacing={2}>
            <Link to="/rent-car" style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="contained">Rent a car</Button>
            </Link>
            <Link to="/lend-car" style={{ textDecoration: 'none' }}>
              <Button color="secondary" variant="contained">Lend a car</Button>
            </Link>
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="contained">Users</Button>
            </Link>
          </Stack>
        </Stack> */}


    </ThemeProvider>
  );
}
