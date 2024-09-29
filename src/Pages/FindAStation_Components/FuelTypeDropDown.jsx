import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { atom, useAtom } from "jotai";
import { FuelTypeAtom, selectedFuelAtom } from "../FindAStation";

export default function ServiceDropdown() {
    const [FuelType] = useAtom(FuelTypeAtom);
    const [selectedFuel, setSelectedFuel] = useAtom(selectedFuelAtom);
    
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleFuelTypeSelection = (type) => {
        setSelectedFuel((prevSelected) =>
            prevSelected.includes(type)
                ? prevSelected.filter(fuel => fuel !== type)
                : [...prevSelected, type]
        );
    };

    return (
        <div
            className="flex flex-col w-[200px] font-intra select-none border-2 border-gray-200 rounded-md p-2 focus:border-orange-500"
            ref={divRef}
            tabIndex={0}
        >
            <div className="flex items-center">
                <div className="flex flex-wrap items-center w-[350px]">
                    {selectedFuel.length === 0 && (
                        <p className="text-md">Select fuel type</p>
                    )}
                    {selectedFuel.map((type) => (
                        <div
                            className="text-xs border m-1 p-1 border-orange-900 rounded-md bg-orange-200 flex items-center gap-1"
                            key={type} // Use `type` as the key assuming it's unique
                        >
                            <p>{type}</p>
                            <button
                                className="font-extrabold"
                                onClick={() => toggleFuelTypeSelection(type)}
                            >
                                x
                            </button>
                        </div>
                    ))}
                </div>
                <ExpandMoreIcon className="cursor-pointer" onClick={toggleDropdown} />
            </div>
            {isOpen && (
                <div className="relative text-left z-10">
                    <div className="absolute left-0 top-0 w-[180px] bg-white border border-gray-300 rounded-md shadow-lg">
                        <button
                            className="border mx-auto w-full font-bold text-gray-600"
                            onClick={() => {
                                setSelectedFuel([]);
                                setIsOpen(false);
                            }}
                        >
                            Clear All
                        </button>
                        <div className="p-2 flex flex-col">
                            <p className="bg-orange-500 text-sm font-bold text-white rounded-md p-1">
                                Station type
                            </p>
                            <hr />
                            {FuelType.map((type) => (
                                <div key={type} className="flex items-center">
                                    <p
                                        className={`${selectedFuel.includes(type) ? "bg-orange-200" : ""
                                            } text-sm p-1 w-full rounded-md m-1 cursor-pointer`}
                                        onClick={() => toggleFuelTypeSelection(type)}
                                    >
                                        {type}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
