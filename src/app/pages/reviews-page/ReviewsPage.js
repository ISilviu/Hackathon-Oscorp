import React from "react";

import ReviewStars from "../../components/review-stars/ReviewStars";
import { TextField } from "@mui/material";
import { faArrowCircleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@mui/material";

import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useState } from "react";

import "./ReviewsPage.css";

const ReviewsPage = () => {
    const [rating, handleChange] = useState(false);

    return (
        <div className="RevPageCont">

            {/* <img src="images/review-bg.jpg" className="Background"/> */}

            <div className="Aligner">

                <div className="Head">Review this Car</div>

                <div className="Content">

                    <div className="ImageContainer">
                        
                        {/* <Button style={{position: 'absolute', top: '50%', left: '-10px'}}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </Button> */}
                        <img src="https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg"
                            alt="car being reviewed"
                            className="carImage"
                        />
                        <ReviewStars absolute={true} score={2.65} />
                        {/* <Button>
                            <FontAwesomeIcon icon={faChevronLeft}
                                    style={{transform: 'rotate(180deg)'}}
                                />
                        </Button> */}
                    </div>

                    <div className="Contribution">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Your Rating</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={rating}
                                label="Rating"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            className="RevNote"
                            label="Review note" minRows={7} multiline color="primary" focused />

                        <Button className="Submit primary-btn" variant="contained" >Submit</Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ReviewsPage;
