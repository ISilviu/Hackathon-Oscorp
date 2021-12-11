import React from "react";
import {Avatar, Button, Input, TextareaAutosize, TextField} from "@mui/material";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {grey} from '@mui/material/colors';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {FormWrapper, TextFieldWrapper} from "./AccountPage.styles";
import './AccountPage.css';
import Header from "../../components/header/Header";

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

/*
    data inregistrarii
    name
    picture url
    email
    username
*/

const AccountPage = () => {
    return (
        <div className="AccPage">
            <Box pt={5} pl={5} className="Tabs">
                <Button className="Tab" variant="contained">
                    <Link to="/account" style={{ textDecoration: 'none', color: "inherit" }}>
                        Profile
                    </Link>
                </Button>
                <Button className="Tab" variant="contained">My Rides</Button>
                <Button className="Tab" variant="contained">
                    <Link to="/transactions" style={{ textDecoration: 'none', color: "inherit" }}>
                        Transactions
                    </Link>
                </Button>
            </Box>
            <div className="Content">

                <div className="userSettings">
                    <FormWrapper>
                        <Avatar
                            alt="Remy Sharp"
                            src="images/placeholder.jpg"
                            sx={{ width: 100, height: 100 }}
                        />
                        <TextFieldWrapper>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" 
                                    className="hidden"
                                />
                                <Button variant="outlined" component="span" className="primary-olbtn">
                                    Upload Profile Pic
                                </Button>
                            </label>
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="User" variant="outlined" />
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <Button variant="contained" component="span" className="primary-btn">
                                Update
                            </Button>
                        </TextFieldWrapper>
                    </FormWrapper>
                </div>

                <div className="AddCar">
                    <FormWrapper>
                    <h3>Add New Car</h3>
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
                            <Button className="primary-btn" variant="contained">Add Car</Button>
                        </Link>
                    </FormWrapper>
                </div>
            </div>
        </div>
    )
}

export default AccountPage
