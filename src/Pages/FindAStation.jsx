import { Stations } from "../Data/stations.js";
import { Services } from "../Data/Services.js";

import { useState } from "react";

import Search from "./FindAStation_Components/Search.jsx";
import Filters from "./FindAStation_Components/Filters.jsx";


// Find Station page component
export default function FindAStation() {
    const [searchText, setSearchText] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);

    function handleSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    console.log(selectedServices);
    console.log(searchText);

    return (
        <>
            <Search handleChange={handleSearchTextChange} />
            <Filters className="pl-10"Services={Services} selectedServices={selectedServices} setSelectedServices={setSelectedServices} />
        </>
    );
}