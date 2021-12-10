import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "@mui/material";

export default function App() {

  const loginUrl = "https://rent-my-car.auth.us-east-2.amazoncognito.com/login?client_id=5298aon6j1e7vjgnl3btv0ei5m&response_type=token&scope=email+openid+phone+profile&redirect_uri=https://rent-my-car.me/";
  const registerUrl = "https://rent-my-car.auth.us-east-2.amazoncognito.com/signup?client_id=5298aon6j1e7vjgnl3btv0ei5m&response_type=token&scope=email+openid+phone+profile&redirect_uri=https://rent-my-car.me/";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" flex={1} spacing={8}>
            <Typography variant="h5">Rent My Car</Typography>
            <Typography variant="h6">Features</Typography>
            <Typography variant="h6">Why this app</Typography>
            <Typography variant="h6">Pricing</Typography>
          </Stack>
          <div>
            <Link
              href={loginUrl}
              color="inherit"
            >
              <IconButton
                size="large"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
            <Link
              href={registerUrl}
              color="inherit">
              <IconButton
                size="large"
                color="inherit"
              >
                <PersonAddIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
