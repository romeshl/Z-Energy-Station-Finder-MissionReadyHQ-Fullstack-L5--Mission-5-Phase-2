import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useRef } from 'react';

export default function Search({ passSearchText }) {
    const [searchText, setSearchText] = useState("");
    const searchRef = useRef(null);

    console.log(searchText);
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
                    onFocus={() => { if (searchRef) { searchRef.current.select() } }}
                    onChange={(e) => { setSearchText(e.target?.value.trim()) }}
                    onKeyDown={(e) => { if (e.key === 'Enter') passSearchText(searchText) }}
                    />
                <button className="w-[50px]"
                    onClick={() => passSearchText(searchText)}>
                    <SearchIcon />
                </button>
            </div>
            <div className="text-gray-900 flex gap-1 mt-2 text-sm items-center 
                md:text-md
                hover:cursor-pointer">
                <MyLocationIcon />
                <p>Use my current location</p>
            </div>
        </div>
    )
}
