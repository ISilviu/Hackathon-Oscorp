import { faLessThanEqual, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RevStars } from "./ReviewStars.styles";

// score is float between 1 and 5
const ReviewStars = ({score = 0, absolute = false}) => {
    const stars = [];

    const validColor = 'rgb(255,0,0)';
    const invalidColor = 'grey';

    let halved = false;
    for (let i = 1; i <= 5; i++) {
        if (i <= score){
            stars.push(1);
        } else {
            if(Math.round(score) != Math.floor(score) && !halved) {
                stars.push(2);
                halved = true;
            } else {
                stars.push(0);
            }
        }
    }

    const placeStars = () => {
        return stars.map(el => 
            el > 0 ?
                el == 1 ?
                <FontAwesomeIcon icon={faStar} style={{color: validColor}}/>
                :
                <FontAwesomeIcon icon={faStarHalfAlt} style={{color: validColor}}/>
            : 
            <FontAwesomeIcon icon={faStar} style={{color: invalidColor}}/>
        )
    }

    return (
        <RevStars abs={absolute}>
            { placeStars() }
        </RevStars>
    );
}

export default ReviewStars;