import React, { useState, useEffect, useRef } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from "@googlemaps/markerclusterer";


import { useAtom } from "jotai";

import { currentMapBoundsAtom, initialMapBoundsAtom, MapBoundsByLocationsListAtom, currentLocationAtom } from "../FindAStation";

const StationsMap = ({ mapCoordinates }) => {
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <ZMap mapCoordinates={mapCoordinates} />
        </APIProvider>
    );
}

const ZMap = ({ mapCoordinates }) => {
    const [, setMapBounds] = useAtom(currentMapBoundsAtom);
    const [initialMapBounds] = useAtom(initialMapBoundsAtom);
    const [MapBoundsByLocationsList] = useAtom(MapBoundsByLocationsListAtom);
    const [currentLocation] = useAtom(currentLocationAtom);

    const myMap = useMap();

    useEffect(() => {
        if (currentLocation && myMap) {
            myMap.setCenter(currentLocation);
            myMap.setZoom(14);
        }
    }, [currentLocation]);

    useEffect(() => {
        if (myMap && (Object.keys(MapBoundsByLocationsList).length > 0)) {
            myMap.fitBounds(MapBoundsByLocationsList);
        } else if (myMap)
            myMap.fitBounds(initialMapBounds);
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
            //onZoomChanged={UpdateMapBounds} // Close InfoWindow on map bounds change
            //onDragend={UpdateMapBounds}
            onBoundsChanged={UpdateMapBounds}
        >
            <ZMarkers mapCoordinates={mapCoordinates} />
        </Map>)
}


const ZMarkers = ({ mapCoordinates }) => {

    const map = useMap();
    const [markers, setMarkers] = useState({});
    const clusterer = useRef(null);

    useEffect(() => {
        if (!map) return
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map })
        }
    }, [map]);

    useEffect(() => {
        clusterer.current.clearMarkers();
        clusterer.current?.addMarkers(Object.values(markers));
    }, [markers])

    const setMarkerRef = (marker, key) => {
        if (marker && markers[key]) return;
        if (!marker && !markers[key]) return;
        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker };
            } else {
                const newMarkers = { ...prev };
                delete newMarkers[key];
                return newMarkers;
            }
        })
    }

    return (<>
        {mapCoordinates.map((point) => (

            <AdvancedMarker
                position={point}
                title={point.name}
                key={point.key}
                ref={ marker => setMarkerRef(marker, point.key)}
            >
             </AdvancedMarker>
        ))}

    </>)
}
export default React.memo(StationsMap);
