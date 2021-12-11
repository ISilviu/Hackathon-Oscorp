import React from "react";

import { RevPageCont, Head, ImageContainer } from "./ReviewsPage.styles";
import ReviewStars from "../../components/review-stars/ReviewStars";
import { TextField } from "@mui/material";

const ReviewsPage = () => {
    return (
        <RevPageCont>
            <Head>Review this Car</Head>

            <ImageContainer>
                <img src="images/placeholder.jpg"
                    alt="car being reviewed"
                    style={{width: '100%', height: '100%'}}
                    />
                <ReviewStars absolute={true} score={2.65}/>
            </ImageContainer>

            Your score:
            <ReviewStars score={2.65}/>

            <TextField label="Review note" minRows={5} multiline color="primary" focused/>

        </RevPageCont>
    )
}

export default ReviewsPage;