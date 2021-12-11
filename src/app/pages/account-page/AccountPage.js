import React from "react";
import {Avatar, Button, TextareaAutosize, TextField} from "@mui/material";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {grey} from '@mui/material/colors';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {FormWrapper, TextFieldWrapper} from "./AccountPage.styles";

const TabButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
        backgroundColor: grey[600],
    },
    padding: 5,
    margin: 5,
    borderRadius: 5
}));

const AccountPage = () => {
    return (
        <Box style={{overflow: "hidden", height: "100%"}}>
            <Box pt={5} pl={5}>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">
                    <Link to="/account" style={{ textDecoration: 'none', color: "inherit" }}>
                        Profile
                    </Link>
                </TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">My Rides</TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">
                    <Link to="/transactions" style={{ textDecoration: 'none', color: "inherit" }}>
                        Transactions
                    </Link>
                </TabButton>
            </Box>
            <FormWrapper>
                <Avatar
                    alt="Remy Sharp"
                    src="images/placeholder.jpg"
                    sx={{ width: 100, height: 100 }}
                />
                <form style={{marginBottom: "1rem"}}>
                    <Box style={{display:"flex"}}>
                        <Stack style={{margin: "0 1rem"}}>
                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Birth Date" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Email" variant="outlined" />
                            </TextFieldWrapper>
                        </Stack>
                    </Box>
                </form>
                <Link to="/lend-car" style={{ textDecoration: 'none' }}>
                    <Button color="primary" variant="contained">Lend a Car</Button>
                </Link>
            </FormWrapper>
        </Box>
    )
}

export default AccountPage
