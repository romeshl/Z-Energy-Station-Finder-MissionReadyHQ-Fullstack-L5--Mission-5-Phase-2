import { Stations } from "../Data/stations.js";
import { Services } from "../Data/Services.js";

import { useState } from "react";

import Search from "./FindAStation_Components/Search.jsx";
import Filters from "./FindAStation_Components/Filters.jsx";
import StationCard from "./FindAStation_Components/StationCard.jsx";

const StationType = ["Truck stop", "Service station"];
const FuelType = ["ZX Premium", "Z91 Unleaded", "Z Diesel"];

// Find Station page component
export default function FindAStation() {
    const [searchText, setSearchText] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedStation, setSelectedStation] = useState([]);
    const [selectedFuel, setSelectedFuel] = useState([]);

    function handleSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    const filteredBySearch = Stations.filter((station) => {
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

    const filteredStations = filteredByStationType.filter((station) => {
        return selectedServices.every(item => station.services.map(service => service.code).includes(item));
    });


    //console.log(filteredStations);
    return (
        <>
            <Search handleChange={handleSearchTextChange} />
            <Filters Services={Services} selectedServices={selectedServices} setSelectedServices={setSelectedServices}
                StationType={StationType} selectedStation={selectedStation} setSelectedStation={setSelectedStation}
                FuelType={FuelType} selectedFuel={selectedFuel} setSelectedFuel={setSelectedFuel} />
            
            <div className="max-w-[1200px] mx-auto grid grid-cols-[40%,_59%] justify-between">
                <div className="max-h-lvh border overflow-y-auto [scrollbar-color:darkorange_white]">
                    <p>{filteredStations.length}</p>
                    {filteredStations.map((station, index) => {
                        return (
                            <StationCard station={station} key={index} />
                        );

                    })}
                </div>
                <div className="border">
                    This is the space for the map.
                </div>
            </div>
            
        </>
    );
}