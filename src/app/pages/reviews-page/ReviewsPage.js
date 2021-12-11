import React from "react";

import ReviewStars from "../../components/review-stars/ReviewStars";
import { TextField } from "@mui/material";
import { faArrowCircleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@mui/material";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ReviewsPage.css";

const ReviewsPage = () => {
    return (
        <div className="RevPageCont">
            <Header/>

            {/* <img src="images/review-bg.jpg" className="Background"/> */}

            <div className="Aligner">
                <div className="Head">Review this Car</div>

                <div className="Content">

                    <div className="ImageContainer">
                        {/* <Button style={{position: 'absolute', top: '50%', left: '-10px'}}>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </Button> */}
                        <img src="images/placeholder.jpg"
                            alt="car being reviewed"
                            style={{width: '100%', height: '100%'}}
                            />
                        <ReviewStars absolute={true} score={2.65}/>
                        {/* <Button>
                            <FontAwesomeIcon icon={faChevronLeft}
                                    style={{transform: 'rotate(180deg)'}}
                                />
                        </Button> */}
                    </div>

                    <div className="Contribution">
                        Your score:
                        <ReviewStars score={2.65}/>

                        <br></br>
                        <TextField 
                        className="RevNote"
                        label="Review note" minRows={7} multiline color="primary" focused/>

                        <Button className="Submit primary-btn" variant="contained" >Submit</Button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    )
}

export default ReviewsPage;