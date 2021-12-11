
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { StyledContainer, StyledMapContainer } from "./CarMap.styles"

const CarMap = ({ width, height, children, center }) => {

    return (
        <StyledContainer>
            <StyledMapContainer>
                <MapContainer
                    style={{
                        width: width, height: height,
                    }}
                    center={[45.663306, 24.866314]}
                    zoom={7}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {children}
                </MapContainer>
            </StyledMapContainer>
        </StyledContainer>
    )
}

export default CarMap