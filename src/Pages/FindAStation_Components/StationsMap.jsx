import React, { useState }  from 'react';
import { APIProvider, Map, AdvancedMarker, Pin ,InfoWindow} from '@vis.gl/react-google-maps';

const StationsMap = ({ mapCoordinates }) => {
  


    return(
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
                style={{ width: '100%', height: '100%' }}
                defaultCenter={{ lat: -41.29, lng: 173.24 }}
                defaultZoom={6}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                mapId={import.meta.env.VITE_MAP_ID}// Apply the custom map style ID

        >
                {mapCoordinates.map((station, index) => (
                    <React.Fragment key={index}>
                        <AdvancedMarker
                            position={station.position}
                            title={station.name}
                            clickable={true}
                            onClick={() => { changeShowInfo(index)}} // Open InfoWindow on marker click
                        />
                       
                    </React.Fragment>
                ))}

        </Map>
    </APIProvider>
    );
}

export default React.memo(StationsMap);
