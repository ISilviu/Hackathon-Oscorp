import { StyledCardContainer, StyledContainer } from './RentCatPage.styles'
import CarMap from '../../components/car-map/CarMap'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from '@mui/material/Card';
import { Paper } from '@mui/material';
import { useMemo, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import CarCard from '../../components/car-card/CarCard.js'
import * as ql from '../../../generated/graphql'
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const DEFAULT_IMAGE = 'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg'

const RentCarPage = ({ }) => {
    const [cars, setCars] = useState(null)
    const [carPosition, setCarPosition] = useState(null)
    const [markerDescription, setMarkerDescription] = useState(null)

    const { data, loading, error } = ql.useGetAllAvailableCarsQuery({
        variables: {
        },
    });

    if (!cars && data) {
        setCars(data?.cars_car)
    }

    const onReserveClick = () => {
    }

    const navigate = useNavigate();
   
    const onInfoClick = () => {

    }

    const onReviewClick = () => {
        navigate('/reviews')
    }

    const onMarkerClick = (marker) => {
        if (marker) {
            setCarPosition([marker.lat, marker.long])
            setMarkerDescription(`${marker.city}, ${marker.country}`)
        }
    }

    const renderCarCards = () => {
        return cars?.map((carData) => {
            const { car_brand, description, fuel_type, body_type, color, capacity, rate, images, location } = carData
            console.log(location)
            return (
                <StyledCardContainer>
                    <CarCard
                        carBrand={car_brand}
                        description={description}
                        fuelType={fuel_type}
                        bodyType={body_type}
                        color={color}
                        capacity={capacity}
                        rate={rate}
                        image={images?.length ? images[0] : DEFAULT_IMAGE}
                        location={location}

                        onReserveClick={onReserveClick}
                        onInfoClick={onInfoClick}
                        onMarkerClick={onMarkerClick}
                        onReviewClick={onReviewClick}
                    />
                </StyledCardContainer>
            )
        })
    }

    const memoizedData = useMemo(() => renderCarCards(), [cars])
    return (
        <StyledContainer>
            <Box p={3} display="flex">
                <Stack flex={1} style={{ alignItems: 'center' }}>
                    <Paper style={{ maxHeight: '75vh', overflow: 'auto', padding: '5px' }}>
                        {memoizedData}
                    </Paper>
                </Stack>

                <Stack flex={1}>
                    <Card style={{ maxHeight: '80vh' }}>
                        <CarMap
                            width={'65vw'}
                            height={'70vh'}
                            center={carPosition}
                        >
                            {carPosition && <Marker position={carPosition}>
                                <Popup>
                                    {markerDescription}
                                </Popup>
                            </Marker>}
                        </CarMap>
                    </Card>
                </Stack>
            </Box>
        </StyledContainer >
    )
}

export default RentCarPage