import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardHeader } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { StyledColumns } from './CarCard.styles';
import RoomIcon from '@mui/icons-material/Room';

import { Link } from '@mui/material';

const CarCard = ({
    carBrand,
    description,
    fuelType,
    bodyType,
    color,
    capacity,
    rate,
    image,
    location,

    onReserveClick,
    onInfoClick,
    onMarkerClick,
    onReviewClick
}) => {

    const onMarkerClickLocal = () => {
        if (onMarkerClick) onMarkerClick(location)
    }

    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardHeader
                action={
                    onInfoClick && (
                        <IconButton aria-label="add to favorites">
                            <InfoIcon />
                        </IconButton>
                    )
                }
                title={carBrand}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Car"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                    <StyledColumns>
                        <ul>
                            <li>{carBrand}</li>
                            <li>{fuelType}</li>
                            <li>{bodyType}</li>

                            <li>{color}</li>
                            <li>{capacity} seats</li>
                            <li>{rate}$</li>
                        </ul>
                    </StyledColumns>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {onReserveClick && (
                    <Button size="small" color="primary" onClick={onReserveClick}>
                        Reserve
                    </Button>
                )}
                {onMarkerClick && (
                    <IconButton aria-label="add to favorites" onClick={onMarkerClickLocal}>
                        <RoomIcon />
                    </IconButton>
                )}
                <Link to="/reviews">
                    <Button size="small" color="primary" onClick={onReviewClick}>
                        Review
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CarCard
