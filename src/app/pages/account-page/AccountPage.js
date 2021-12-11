import React from "react";
import { Avatar, Button, Input, TextareaAutosize, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { FormWrapper, TextFieldWrapper } from "./AccountPage.styles";
import './AccountPage.css';
import Header from "../../components/header/Header";
import { useGetLoggedInUserQuery } from "../../../generated/graphql";
import { useLocation, useNavigate } from 'react-router-dom';

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
    const location = useLocation();
    const extractAuthToken = () => {
        const idTokenParam = 'id_token=';
        const idTokenStart = location.hash.indexOf(idTokenParam);

        const accessTokenParam = '&access_token=';
        const accessTokenStart = location.hash.indexOf(accessTokenParam);

        return location.hash.substring(idTokenStart + idTokenParam.length, accessTokenStart);
    }
    const authToken = extractAuthToken();
    localStorage.setItem('authToken', authToken);

    const navigate = useNavigate();
    if (location.hash) {
        navigate(location.pathname)
    }

    const { data, isLoading, error } = useGetLoggedInUserQuery({
        context: {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    });

    return (
        <div className="AccPage">
            <div className="Content">

                <div className="userSettings">
                    <FormWrapper>
                        <Avatar
                            alt="Remy Sharp"
                            src={(data && data.users_user?.length) ? data.users_user[0].picture : "images/placeholder.jpg"}
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
                            <TextField id="outlined-basic" variant="outlined" value={(data && data.users_user?.length) ? data.users_user[0].name : ''}/>
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" variant="outlined" value={(data && data.users_user?.length) ? data.users_user[0].username : ''} />
                        </TextFieldWrapper>
                        <TextFieldWrapper>
                            <TextField id="outlined-basic" variant="outlined" value={(data && data.users_user?.length) ? data.users_user[0].email : ''} />
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
                        <form style={{ 'margin-bottom': "1rem" }}>
                            <Box style={{ display: "flex" }}>
                                <Stack style={{ margin: "0 1rem" }}>
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
                                <Stack style={{ margin: "0 1rem" }}>
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
                            <TextFieldWrapper style={{ margin: "0 1rem" }}>
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
