import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { v4 as uuid4 } from 'uuid';

export default function ServiceDropdown({ StationType, selectedStation, setSelectedStation }) {
    const [isOpen, setIsOpen] = useState(false);

    const divRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);


    // Handle click outside the div
    useEffect(() => {
        function handleClickOutside(event) {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsOpen(false); // Lost focus
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [divRef]);

    function AddRemoveStationType(type) {
        setSelectedStation(prevStations =>
            prevStations.includes(type)
                ? prevStations.filter(station => station !== type) // Remove the type
                : [type] // Set the type as the only item
        );
    }

    return (
        <div className="flex-row w-[200px] font-intra select-none border-2 border-gray-200 rounded-md p-2
            focus:border-orange-500" ref={divRef}
            tabIndex={uuid4().toString()}>
            <div className="flex items-center " >
                <div className="flex  flex-wrap items-center w-[350px]"  >
                    {selectedStation.length === 0 ? <p className="text-md">Select station type</p> : null}
                    {StationType.map((type, index) => {

                        return (
                            selectedStation.includes(type) &&
                            <div className="text-xs border m-1 p-1 border-orange-900 rounded-md bg-orange-200 flex items-center gap-1 "
                                key={index}><p>{type}</p>
                                    <button key={index} className="font-extrabold" onClick={() => { AddRemoveStationType(type) }}>x</button>
                            </div>
                        )

                    })}

                </div>
                <ExpandMoreIcon className="cursor-pointer" onClick={toggleDropdown} />
            </div>
            <div className="relative text-left">
                {isOpen && (
                    <div className="absolute left-0 top-0 w-[180px] bg-white border border-gray-300 rounded-md shadow-lg rounded-lg"
                    >
                        <button className="border mx-auto w-[100%] font-bold text-gray-600" onClick={() => { setSelectedStation([]); setIsOpen(false); }}>Clear All</button>
                        <div className="p-2 flex-row">
                            <p className="bg-orange-500  text-sm font-bold text-white rounded-md p-1 ">Station type</p>
                            <hr />
                            {StationType.map((type, index) => {
                                return (<>

                                    <div key={index} className="flex items-center">
                                        <p key={index} className={`${selectedStation.includes(type) ? "bg-orange-200" : ""} text-sm p-1 w-[100%] rounded-md m-[1px] cursor-pointer`}
                                            onClick={() => { AddRemoveStationType(type) }}
                                        >{type}</p>
                                    </div>

                                </>)
                            })}
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
