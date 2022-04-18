import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './styles.css'

type GoogleMapPropsType = {
    locations: {
        name: string;
        location: {
            lat: number;
            lng: number;
        }
    }[]
} 

export default function GoogleMapComponent({locations}: GoogleMapPropsType)
{
    return (
        <div className="mapContainer">
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_API_KEY!}>
                <GoogleMap
                    mapContainerStyle={{height: '100%', width: '100%'}}
                    zoom={13}
                    center={{lat: 41.3851, lng: 2.1734}}
                >
                    {
                        locations.map(data =>
                        {
                            return <Marker key={data.name} position={{lat: data.location.lat, lng: data.location.lng}} />;
                        })
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
