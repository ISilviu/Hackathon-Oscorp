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
        backgroundColor: grey[700],
    },
    padding: 5,
    margin: 5,
    borderRadius: 5
}));

const AccountPage = () => {
    return (
        <Box style={{overflow: "hidden", height: "100%"}}>
            <Box pt={5} pl={5}>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">Profile</TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">My Rides</TabButton>
                <TabButton sx={{backgroundColor: '#B4B4B4'}} variant="contained">Funds</TabButton>
            </Box>
            <FormWrapper>
                <Avatar
                    alt="Remy Sharp"
                    src="images/placeholder.jpg"
                    sx={{ width: 100, height: 100 }}
                />
                <form style={{'margin-bottom': "1rem"}}>
                    <Box style={{display:"flex"}}>
                        <Stack style={{margin: "0 1rem"}}>
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
                        </Stack>
                        <Stack style={{margin: "0 1rem"}}>
                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Color" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Capacity" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Rate" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Car Brand" variant="outlined" />
                            </TextFieldWrapper>
                        </Stack>
                    </Box>
                    <TextFieldWrapper style={{margin: "0 1rem"}}>
                        <TextField
                            maxRows={Infinity}
                            multiline rows={3}
                           id="outlined-basic"
                           label="Description"
                           variant="outlined" />
                    </TextFieldWrapper>
                </form>
                <Link to="/reviews" style={{ textDecoration: 'none' }}>
                    <Button color="primary" variant="contained">Add Car</Button>
                </Link>
            </FormWrapper>
        </Box>

    )
}

export default AccountPage
