import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

export default function CarsList() {

    const cars = React.useMemo(() => [
        {
            body_type: 'Hatchback',
            capacity: '150MWh',
            car_brand: 'Tesla',
            color: 'Red',
            description: 'Nice, confortable for a long trip.',
            fuel_type: 'Electricity',
            is_approval_required: 'No',
            plate_number: 'BV-10-ABC',
            rate: '10E/h'
        },
        {
            body_type: 'Hatchback',
            capacity: '150MWh',
            car_brand: 'Tesla',
            color: 'Red',
            description: 'Nice, confortable for a long trip.',
            fuel_type: 'Electricity',
            is_approval_required: 'No',
            plate_number: 'BV-10-ABC',
            rate: '10E/h'
        },
        {
            body_type: 'Hatchback',
            capacity: '150MWh',
            car_brand: 'Tesla',
            color: 'Red',
            description: 'Nice, confortable for a long trip.',
            fuel_type: 'Electricity',
            is_approval_required: 'No',
            plate_number: 'BV-10-ABC',
            rate: '10E/h'
        },
        {
            body_type: 'Hatchback',
            capacity: '150MWh',
            car_brand: 'Tesla',
            color: 'Red',
            description: 'Nice, confortable for a long trip.',
            fuel_type: 'Electricity',
            is_approval_required: 'No',
            plate_number: 'BV-10-ABC',
            rate: '10E/h'
        }
    ], []);

    return (
        <Stack spacing={1.5} maxWidth="310px">
            {cars.map((car, index) => (
                <Card id={index}>
                    <CardActionArea>
                        <CardMedia component="img" height="150" image={car.image} alt="car" />
                    </CardActionArea>
                    <CardContent>
                        <Box display="flex">
                            <Stack flex={1} spacing={1} flexWrap="wrap">
                                <Typography paragraph>{car.fuel_type}</Typography>
                                <Typography paragraph>{car.body_type}</Typography>
                                <Typography paragraph>{car.is_approval_required}</Typography>
                                <Typography paragraph>{car.plate_number}</Typography>
                            </Stack>
                            <Stack flex={1} spacing={1}>
                                <Typography paragraph>{car.color}</Typography>
                                <Typography paragraph>{car.capacity}</Typography>
                                <Typography paragraph>{car.rate}</Typography>
                                <Typography paragraph>{car.car_brand}</Typography>
                            </Stack>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Stack>
    )
};