import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useRef } from 'react';

import { useAtom } from "jotai";
import { searchTextAtom, LocationTextAtom, resetMapBoundsAtom ,currentLocationAtom} from "../FindAStation";

export default function Search() {
    const [, setSearchTextAtom] = useAtom(searchTextAtom);
    const [, resetMapBounds] = useAtom(resetMapBoundsAtom);
    const [,setCurrentLocation] = useAtom(currentLocationAtom);
    
    const [locationText, setLocationText] =useAtom(LocationTextAtom);
    const searchRef = useRef(null);

    function setLocation() {
        let currentLocation = {};
        navigator.geolocation.getCurrentPosition((position) => {
            currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            setCurrentLocation(currentLocation);
        });

    }

    return (
        <div className="max-w-[1200px] min-w-[375px] h-[200px] mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 py-11 pl-10
            md:h-[250px]">
            <h1 className="text-2xl font-Inter font-extrabold text-white mb-2
                sm:text-3xl
                md:text-4xl">Find a station</h1>
            <div className="bg-white w-[75%] flex items-center gap-2 p-2 rounded-md font-Inter my-3
                focus-within:border focus-within:border-orange-800 ">
                <input
                    placeholder='Enter a location or a station'
                    ref={searchRef} type="text"
                    className="w-[100%] outline-none pl-2"
                    value={locationText}
                    onFocus={() => { if (searchRef) { searchRef.current.select() } }}
                    onChange={(e) => { setLocationText(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            resetMapBounds();
                            setSearchTextAtom(locationText.trim());
                        }

                    }}
                    />
                <button className="w-[50px]"
                    onClick={() => {
                        resetMapBounds();
                        setSearchTextAtom(locationText.trim())
                    }}>
                    <SearchIcon />
                </button>
            </div>
            <div className=" select-none text-gray-900 flex gap-1 mt-2 text-sm items-center 
                md:text-md
                hover:cursor-pointer"
            onClick={setLocation}>
                <MyLocationIcon />
                <p>Use my current location</p>
            </div>
        </div>
    )
}
