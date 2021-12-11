
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { StyledContainer, StyledMapContainer } from "./CarMap.styles"

const CarMap = ({ width, height, children, center }) => {
    const [map, setMap] = useState(null)

    if (map && center) {
        map.flyTo(center);
    }

    return (
        <StyledContainer>
            <StyledMapContainer>
                <MapContainer
                    style={{
                        width: width, height: height,
                    }}
                    center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    whenCreated={setMap}
                    center={center}
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