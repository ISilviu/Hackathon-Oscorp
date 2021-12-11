import Box from "@mui/material/Box";
import {FormWrapper, TextFieldWrapper} from "../account-page/AccountPage.styles";
import {Button, TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom";
import React from "react";

const AddCarPage = () => {
    return (
        <Box style={{overflow: "hidden", height: "100%"}}>
            <FormWrapper>
                <form style={{marginBottom: "1rem"}}>
                    <Box style={{display:"flex"}}>
                        <Stack style={{margin: "0 1rem"}}>
                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Browse car image" variant="outlined" />
                            </TextFieldWrapper>
                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Fuel Type" variant="outlined" />
                            </TextFieldWrapper>

                            <TextFieldWrapper>
                                <TextField id="outlined-basic" label="Body Type" variant="outlined" />
                            </TextFieldWrapper>

                            {/*<TextFieldWrapper>*/}
                            {/*    <TextField id="outlined-basic" label="Status" variant="outlined" />*/}
                            {/*</TextFieldWrapper>*/}

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
export default AddCarPage
