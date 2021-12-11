import React from "react";

import { RevPageCont, Head, ImageContainer } from "./ReviewsPage.styles";
import ReviewStars from "../../components/review-stars/ReviewStars";
import { TextField } from "@mui/material";
import { faArrowCircleLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "@mui/material";

const ReviewsPage = () => {
    return (
        <RevPageCont className="justify-content-end">
            <Head className="text-danger">Review this Car</Head>

            <ImageContainer>
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
            </ImageContainer>

            Your score:
            <ReviewStars score={2.65}/>

            <br></br>
            <TextField label="Review note" minRows={5} multiline color="primary" focused/>

        </RevPageCont>
    )
}

export default ReviewsPage;