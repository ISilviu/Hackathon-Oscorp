import React from "react";
import {Button, TextField} from "@mui/material";
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
        backgroundColor: grey[700],
    },
    padding: 5,
    margin: 5
}));

const AccountPage = () => {
    return (
        <Box>
            <Box pl={10}>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">Profile</TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">My Rides</TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">Funds</TabButton>
            </Box>
            <FormWrapper>
                <form style={{width: "50%"}}>
                    <Stack>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Fuel Type" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Body Type" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Status" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Plate Number" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Color" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Capacity" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Rare" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Car Brand" variant="outlined" />
                        </TextFieldWrapper>

                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Description" variant="outlined" />
                        </TextFieldWrapper>
                    </Stack>
                </form>

                <Link to="/reviews" style={{ textDecoration: 'none' }}>
                    <Button color="primary" variant="contained">Add Car</Button>
                </Link>
            </FormWrapper>
        </Box>

    )
}

export default AccountPage
