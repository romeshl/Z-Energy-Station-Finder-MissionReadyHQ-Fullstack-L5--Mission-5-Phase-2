import { Stations } from "../Data/stations.js";

import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";

import Search from "./FindAStation_Components/Search.jsx";
import Filters from "./FindAStation_Components/Filters.jsx";
import StationCard from "./FindAStation_Components/StationCard.jsx";
import StationsMap from "./FindAStation_Components/StationsMap.jsx";

export const StationTypeAtom = atom(["Truck stop", "Service station"]);
export const FuelTypeAtom = atom(["ZX Premium", "Z91 Unleaded", "Z Diesel"]);

export const initialMapBoundsAtom = atom({
    "east": 178.02113183974,
    "north": -34.996045297372,
    "south": -46.405035754647,
    "west": 168.32991591529
})

export const searchTextAtom = atom("");
export const selectedServicesAtom = atom([]);
export const selectedStationAtom = atom([]);
export const selectedFuelAtom = atom([]);
export const LocationTextAtom = atom("");
export const currentLocationAtom = atom({});

export const currentMapBoundsAtom = atom({} );

export const MapBoundsByLocationsListAtom = atom({});

export const clearSearchAtom = atom(null, (get, set) => {
    set(searchTextAtom, "");
    set(LocationTextAtom, "");
});

export const resetAtom = atom(null, (get, set) => {
    set(searchTextAtom, "");
    set(selectedServicesAtom, []);
    set(selectedStationAtom, []);
    set(selectedFuelAtom, []);
    set(currentMapBoundsAtom, get(initialMapBoundsAtom));
    set(MapBoundsByLocationsListAtom, get(initialMapBoundsAtom));
    set(LocationTextAtom, "");
});

export const resetMapBoundsAtom = atom(null, (get, set) => {
    set(currentMapBoundsAtom, get(initialMapBoundsAtom));
});

// Find Station page component
export default function FindAStation() {
    const [initialMapBounds] = useAtom(initialMapBoundsAtom);
    const [searchText] = useAtom(searchTextAtom);
    const [selectedServices] = useAtom(selectedServicesAtom);
    const [selectedStation] = useAtom(selectedStationAtom);
    const [selectedFuel] = useAtom(selectedFuelAtom);
    const [currentMapBounds, setCurrentMapBounds] = useAtom(currentMapBoundsAtom);
    const [, setMapBoundsByLocationsList] = useAtom(MapBoundsByLocationsListAtom);

    useEffect(() => {
        setCurrentMapBounds(initialMapBounds);
        setMapBoundsByLocationsList(initialMapBounds);
    }, []); 

    useEffect(() => {
        if (filteredStations.length === 0) return;
        const newMapBounds = {
            east: Math.max(...filteredStations.map(station => station.longitude)),
            north: Math.max(...filteredStations.map(station => station.latitude)),
            south: Math.min(...filteredStations.map(station => station.latitude)),
            west: Math.min(...filteredStations.map(station => station.longitude))
        }
        setMapBoundsByLocationsList(newMapBounds);
    }, [searchText, selectedServices, selectedStation, selectedFuel]);

    const filteredByMapBounds = Stations.filter((station) => {
        return (station.latitude <= currentMapBounds.north && station.latitude >= currentMapBounds.south) &&
            (station.longitude <= currentMapBounds.east && station.longitude >= currentMapBounds.west);
    });

    const filteredBySearch = filteredByMapBounds.filter((station) => {
        if (!searchText) return true;
        const lowerCasedSearchText = searchText.toLowerCase();
        const textFound = [
            station.name?.toLowerCase().includes(lowerCasedSearchText),
            station.address?.toLowerCase().includes(lowerCasedSearchText),
            station.suburb?.toLowerCase().includes(lowerCasedSearchText),
            station.city?.toLowerCase().includes(lowerCasedSearchText),
            station.region?.toLowerCase().includes(lowerCasedSearchText),
            station.postcode === parseInt(searchText)
        ].some(Boolean);  // Checks if any condition is true
        return textFound;
    });


    const filteredByFuelType = filteredBySearch.filter((station) => {
        if (selectedFuel.length === 0) return true;
        return selectedFuel.every(item => station.fuels.map(fuel => fuel.name).includes(item));

    });

    const filteredByStationType = filteredByFuelType.filter((station) => {
        if (selectedStation.length === 0) return true;
        return station.type === selectedStation[0];
    });

    const filteredByServices = filteredByStationType.filter((station) => {
        return selectedServices.every(item => station.services.map(service => service.code).includes(item));
    });

    const filteredStations = filteredByServices.map((station) => {
        station.fuels.map((fuel) => {
            if (fuel.name === "ZX Premium") fuel.price = (Math.floor(Math.random() * 30) + 270) / 100;
            if (fuel.name === "Z91 Unleaded") fuel.price = (Math.floor(Math.random() * 20) + 180) / 100;
            if (fuel.name === "Z Diesel") fuel.price = (Math.floor(Math.random() * 20) + 180) / 100;
            return fuel;
        });
        return station;
    });

    const mapCoordinates = filteredStations.map((station) => {
        return {
            name: station.name,
            position: {
                lat: parseFloat(station.latitude),
                lng: parseFloat(station.longitude)
            },
            showInfo: false
        };
    });

    const StationsList = () => {
        if (searchText) {
            return `Search results for "${searchText}" - No. of stations: ${filteredStations.length}`;
        } else
            return `No. of staions: ${filteredStations.length}`;
    }


    return (
        <div className="max-w-[1200px] min-w-[375px] h-[200px] mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 p-10 pl-10">
            <h1 className="text-2xl font-Inter font-extrabold text-white mb-2
            sm:text-3xl
            md:text-4xl">Find a Station</h1>
            <TextField
                variant="outlined"
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                   }
                }}
                className="bg-white rounded-lg shadow-md w-[80%]"
            />
        </div>
        <>
            <Search />
            <Filters />
            <div className="max-w-[1150px] mx-auto grid grid-cols-[40%,_59%] justify-between h-[90vh]">
                <div className="h-[90vh]">
                    <p className="text-center text-sm font-bold text-blue-900">{StationsList()}</p>
                    <div className="p-1 h-[100%] overflow-y-auto [scrollbar-color:darkorange_white]">
                    {filteredStations.map((station, index) => {
                        return (
                            <StationCard station={station} key={index} />
                        );

                    })}
                    </div>
                </div>

                <div className="border z-0">
                    <StationsMap mapCoordinates={mapCoordinates} />
                </div>
            </div>

        </>
    );
}