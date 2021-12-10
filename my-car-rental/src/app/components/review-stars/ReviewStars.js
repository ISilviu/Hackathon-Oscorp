import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// score is float between 1 and 5
const ReviewStars = ({score = 0}) => {
    const stars = [];

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

    return (
        <div>
            {
                stars.map(el => 
                    el > 0 ?
                        el == 1 ?
                        <FontAwesomeIcon icon={faStar} style={{color: "rgb(255,0,0)"}}/>
                        :
                        <FontAwesomeIcon icon={faStarHalfAlt} style={{color: "rgb(255,0,0)"}}/>
                    : 
                    <FontAwesomeIcon icon={faStar} style={{color: "grey"}}/>
                )
            }
        </div>
    );
}

export default ReviewStars;