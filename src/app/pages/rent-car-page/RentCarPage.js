import { StyledCardContainer, StyledContainer } from './RentCatPage.styles'
import CarMap from '../../components/car-map/CarMap'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CarCard from '../../components/car-card/CarCard';
import Card from '@mui/material/Card';
import { Paper } from '@mui/material';
import { useMemo, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

const TEST_DATA = [
    {
        car_brand: 'Volvo XC60 2021',
        description: 'Perfect condition. No recorded history.',
        fuel_type: 'Petrol',
        body_type: 'Hatch',
        color: 'Red',
        capacity: '5',
        rate: '12',
        reviews: [
            {
                description: 'The ride was comfy and the car in almost perfect condition. ',
                title: 'Amazing car!',
                score: '4.7',
                date: Date.now()
            },
            {
                description: 'Nice car overall.',
                title: 'Good enough',
                score: '4.0',
                date: Date.now()
            }
        ],
        images: [
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg',
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg',
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg'
        ]
    },
    {
        car_brand: 'Volvo XC60 2021',
        description: 'Perfect condition. No recorded history.',
        fuel_type: 'Petrol',
        body_type: 'Hatch',
        color: 'Red',
        capacity: '5',
        rate: '12',
        reviews: [
            {
                description: 'The ride was comfy and the car in almost perfect condition. ',
                title: 'Amazing car!',
                score: '4.7',
                date: Date.now()
            },
            {
                description: 'Nice car overall.',
                title: 'Good enough',
                score: '4.0',
                date: Date.now()
            }
        ],
        images: [
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg',
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg',
            'https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg'
        ],
        location: { lat: 45.645411, long: 25.591743 }
    }
]

const RentCarPage = ({ }) => {
    const [cars, setCars] = useState(TEST_DATA)
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

    const onInfoClick = () => {

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
                        image={images?.length ? images[0] : null}
                        location={location}

                        onReserveClick={onReserveClick}
                        onInfoClick={onInfoClick}
                        onMarkerClick={onMarkerClick}
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