import React from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const StationsMap = ({mapCoordinates}) => (
    <APIProvider apiKey={'AIzaSyBeTJ3Vg9nc1dD7sldTXvlKUZoaT-liKzg'}>
        <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={{ lat: -41.29, lng: 173.24 }}
            defaultZoom={6}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="22a3f219cca6524" // Apply the custom map style ID
        >
            {mapCoordinates.map((station, index) => (
                <AdvancedMarker
                    key={index}
                    position={station.position}
                    title={station.name}
                />
            ))}

        </Map>
    </APIProvider>
);

export default React.memo(StationsMap);
