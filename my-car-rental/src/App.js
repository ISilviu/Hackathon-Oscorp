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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ReviewsPage from "./app/pages/reviews-page/ReviewsPage";

export default function App({ }) {

  const theme = useTheme();

  const loginUrl = "https://rent-my-car.auth.us-east-2.amazoncognito.com/login?client_id=5298aon6j1e7vjgnl3btv0ei5m&response_type=token&scope=email+openid+phone+profile&redirect_uri=https://rent-my-car.me/";
  const registerUrl = "https://rent-my-car.auth.us-east-2.amazoncognito.com/signup?client_id=5298aon6j1e7vjgnl3btv0ei5m&response_type=token&scope=email+openid+phone+profile&redirect_uri=https://rent-my-car.me/";

  return (
    <Stack sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Stack direction="row" flex={1} spacing={8}>
            <Typography variant="h5">Rent My Car</Typography>
            <Typography variant="h6">
              <Typography href="/lend-car" variant="h6">
                <Link to="/account" underline="none" style={{ textDecoration: 'none', color: 'inherit'}}>
                  <Box>Features</Box>
                </Link>
              </Typography>
            </Typography>
            <Typography variant="h6">Why this app</Typography>
            <Typography variant="h6">Pricing</Typography>
          </Stack>
          <div>
            <MuiLink
              href={loginUrl}
              color="inherit"
            >
              <IconButton
                size="large"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </MuiLink>
            <MuiLink
              href={registerUrl}
              color="inherit">
              <IconButton
                size="large"
                color="inherit"
              >
                <PersonAddIcon />
              </IconButton>
            </MuiLink>
          </div>
        </Toolbar>
      </AppBar>
      <Box p={3} display="flex">
        <Stack flex={1}>
          <Typography variant="h2">Rent a car with RideMyCar</Typography>
          <FontAwesomeIcon icon={faCoffee} />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper euismod erat, sed ornare dolor luctus vehicula. Curabitur dictum, turpis non molestie vehicula, sem lorem mattis tellus, a sagittis risus turpis vel nibh. Curabitur lacinia scelerisque lectus, ultricies auctor odio. Nullam in venenatis est. Sed id erat non mauris pretium scelerisque eget vel velit. Donec posuere, mi nec scelerisque laoreet, velit nisl vehicula nulla, id dignissim magna odio vel massa. Suspendisse vel dolor ultricies, placerat urna vitae, ullamcorper ligula. Vestibulum aliquet metus turpis, a fermentum tortor euismod sed. Sed viverra ante non feugiat condimentum. Nunc ac imperdiet velit. Nulla sollicitudin, urna non euismod consequat, nisl turpis vulputate sapien, at congue enim lacus scelerisque nisl. Pellentesque molestie ante tincidunt, consequat nibh sit amet, convallis mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Stack>
        <Stack flex={1}>
          <Typography variant="h2">Rent a car with RideMyCar</Typography>
          Donec in leo quis arcu dapibus cursus et vel justo. Aenean finibus, lorem et congue volutpat, ex nibh finibus enim, rhoncus vehicula nulla elit id purus. Ut auctor dignissim turpis, ut ornare urna tincidunt vel. Nullam efficitur sagittis lectus in bibendum. Nullam bibendum nisi nisl, ac euismod lectus tristique nec. Vivamus finibus id quam vehicula semper. Aliquam euismod facilisis leo, ut euismod felis. Donec feugiat accumsan massa, vel efficitur arcu euismod quis. Phasellus quis diam id neque bibendum euismod ac euismod dui. In pretium tellus quis leo aliquam pretium. Donec orci tortor, ornare vel sapien nec, laoreet sollicitudin velit. Sed neque orci, imperdiet nec erat et, elementum lacinia enim. Etiam in erat vulputate, tempus turpis quis, imperdiet quam. Quisque vestibulum diam non neque venenatis euismod. Proin diam nisl, fringilla et pretium nec, fringilla in ligula. Integer lorem lacus, auctor eget dignissim quis, mollis a ante.
        </Stack>
      </Box>
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
      <ReviewsPage />
    </Stack>
  );
}
