import { Stations } from "../Data/stations.js";
import { Services } from "../Data/Services.js";

import { useState } from "react";

import Search from "./FindAStation_Components/Search.jsx";
import Filters from "./FindAStation_Components/Filters.jsx";

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
        if (searchText === "") return true;
        return station.name.toLowerCase().includes(searchText.toLowerCase()) ||
            station.address.toLowerCase().includes(searchText.toLowerCase()) ||
            station.suburb.toLowerCase().includes(searchText.toLowerCase()) ||
            station.city.toLowerCase().includes(searchText.toLowerCase()) ||
            station.postcode.includes === parseInt(searchText) ||
            station.region.toLowerCase().includes(searchText.toLowerCase());
    });

    function handleSearch() {
        if (searchText === "") return Stations;

        const lowerCaseSearch = searchText.toLowerCase();

        const filteredBySearch = Stations.filter((station) => {
            return (
                (station.name && station.name.toLowerCase().includes(lowerCaseSearch)) 

            );
        });

        return filteredBySearch;
    }



    const filteredByFuelType = Stations.filter((station) => {
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
            <p>{filteredStations.length}</p>
            {filteredStations.map((station, index) => {
                return (
                    <div key={index} className="flex flex-row gap-5 p-5">
                        <p>{station.name}</p>
                    </div>
                );
                
            })}
        </>
    );
}