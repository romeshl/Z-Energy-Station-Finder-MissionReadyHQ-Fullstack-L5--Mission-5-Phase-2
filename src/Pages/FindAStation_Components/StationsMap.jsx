import React, { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps';

import { useAtom } from "jotai";

import { currentMapBoundsAtom } from "../FindAStation";

const StationsMap = ({ mapCoordinates }) => {



    useEffect(() => {
        console.log("Rerendering StationsMap");
    });

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <ZMap mapCoordinates={mapCoordinates}  />
        </APIProvider>
    );
}

const ZMap = ({ mapCoordinates }) => {
    const [, setMapBounds] = useAtom(currentMapBoundsAtom);
    
    const myMap = useMap();

    return (
        <Map
            className="w-full h-full "
            defaultBounds={{
                "east": 178.02113183974,
                "north": -34.996045297372,
                "south": -46.405035754647,
                "west": 168.32991591529
            }}
            
            defaultZoom={15}
            minZoom={6}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={import.meta.env.VITE_MAP_ID}// Apply the custom map style ID
            onClick={() => { alert("Test"); }} // Close InfoWindow on map click
            onBoundsChanged={() => {
                if (myMap) {
                    const newMapBounds = {
                        east: myMap.getBounds().getNorthEast().lng() <= 0 ? 179 : myMap.getBounds().getNorthEast().lng(),
                        north: myMap.getBounds().getNorthEast().lat(),
                        south: myMap.getBounds().getSouthWest().lat(),
                        west: myMap.getBounds().getSouthWest().lng()
                    }

                    setMapBounds(newMapBounds);
                }
            }} // Close InfoWindow on map bounds change

        >
            {mapCoordinates.map((station, index) => (
                <React.Fragment key={index}>
                    <AdvancedMarker
                        position={station.position}
                        title={station.name}
                        clickable={true}
                        onClick={() => { null }} // Open InfoWindow on marker click
                    />

                </React.Fragment>
            ))}

        </Map>)
}

export default React.memo(StationsMap);
