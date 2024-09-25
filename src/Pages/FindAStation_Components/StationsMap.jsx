import React, { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps';

import { useAtom } from "jotai";

import { currentMapBoundsAtom, initialMapBoundsAtom, MapBoundsByLocationsListAtom } from "../FindAStation";

const StationsMap = ({ mapCoordinates }) => {
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <ZMap mapCoordinates={mapCoordinates}  />
        </APIProvider>
    );
}

const ZMap = ({ mapCoordinates }) => {
    const [, setMapBounds] = useAtom(currentMapBoundsAtom);
    const [initialMapBounds] = useAtom(initialMapBoundsAtom);
    const [MapBoundsByLocationsList] = useAtom(MapBoundsByLocationsListAtom);

    const myMap = useMap();

    useEffect(() => {
        console.log("Map bounds changed by filter.")
        if (myMap) {
            myMap.fitBounds(MapBoundsByLocationsList);
        }
     }, [MapBoundsByLocationsList]);



    function UpdateMapBounds() {
        if (myMap) {
            const newMapBounds = {
                east: myMap.getBounds().getNorthEast().lng() <= 0 ? 179 : myMap.getBounds().getNorthEast().lng(),
                north: myMap.getBounds().getNorthEast().lat(),
                south: myMap.getBounds().getSouthWest().lat(),
                west: myMap.getBounds().getSouthWest().lng()
            }
            setMapBounds(newMapBounds);
        }
    }

    return (
        <Map
            className="w-full h-full "
            defaultBounds={initialMapBounds}
            defaultZoom={15}
            minZoom={6}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={import.meta.env.VITE_MAP_ID}// Apply the custom map style ID
            onClick={() => { alert("Test"); }} // Close InfoWindow on map click
            onZoomChanged={UpdateMapBounds} // Close InfoWindow on map bounds change
            onDragend={UpdateMapBounds}

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
