import { Stations } from "../Data/stations.js";
import { Services } from "../Data/Services.js";

import { useState, useEffect } from "react";

import Search from "./FindAStation_Components/Search.jsx";
import Filters from "./FindAStation_Components/Filters.jsx";
import StationCard from "./FindAStation_Components/StationCard.jsx";
import StationsMap from "./FindAStation_Components/StationsMap.jsx";

const StationType = ["Truck stop", "Service station"];
const FuelType = ["ZX Premium", "Z91 Unleaded", "Z Diesel"];

// Find Station page component
export default function FindAStation() {
    const [searchText, setSearchText] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedStation, setSelectedStation] = useState([]);
    const [selectedFuel, setSelectedFuel] = useState([]);
    const [currentMapBounds, setCurrentMapBounds] = useState({
        "east": 178.02113183974,
        "north": -34.996045297372,
        "south": -46.405035754647,
        "west": 168.32991591529
    });

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

    return (
        <>
            <Search passSearchText={setSearchText} />
            <Filters Services={Services} selectedServices={selectedServices} setSelectedServices={setSelectedServices}
                StationType={StationType} selectedStation={selectedStation} setSelectedStation={setSelectedStation}
                FuelType={FuelType} selectedFuel={selectedFuel} setSelectedFuel={setSelectedFuel} />

            <div className="max-w-[1200px] mx-auto grid grid-cols-[40%,_59%] justify-between h-lvh">
                <div className="max-h-lvh overflow-y-auto [scrollbar-color:darkorange_white]">
                    <p className="text-center text-sm font-bold text-blue-900">{`Number of results: ${filteredStations.length}`}</p>
                    {filteredStations.map((station, index) => {
                        return (
                            <StationCard station={station} key={index} />
                        );

                    })}
                </div>
                <div className="border z-0">
                    <StationsMap mapCoordinates={mapCoordinates}  setMapBounds={setCurrentMapBounds} />
                </div>
            </div>

        </>
    );
}