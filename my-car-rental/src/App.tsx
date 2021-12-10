import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function App() {
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
            <IconButton
              size="large"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
            >
              <PersonAddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
