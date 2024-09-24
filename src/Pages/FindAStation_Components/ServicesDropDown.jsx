import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Services } from "../../Data/Services";

import { useAtom } from "jotai";
import { selectedServicesAtom } from "../FindAStation";

export default function ServicesDropdown() {
    const [selectedServices, setSelectedServices] = useAtom(selectedServicesAtom);
    
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

    function AddRemoveServiceCode(serviceCode) {
        if (selectedServices.includes(serviceCode)) {
            setSelectedServices(selectedServices.filter(service => service !== serviceCode));
        } else {
            setSelectedServices([...selectedServices, serviceCode]);
        }
    }

    return (
        <div className="flex-row w-[320px] font-intra select-none border-2 border-gray-200 rounded-md p-2
            focus:border-orange-500" ref={divRef}
            tabIndex={0}>
            <div className="flex items-center">
                <div className="flex flex-wrap items-center w-[350px]">
                    {selectedServices.length === 0 && <p className="text-md">Select a service or services</p>}
                    {Services.flatMap((service) =>
                        service.services.map((s) =>
                            selectedServices.includes(s.code) ? (
                                <div className="text-xs border m-1 p-1 border-orange-900 rounded-md bg-orange-200 flex items-center gap-1"
                                    key={s.code}>
                                    <p>{s.name}</p>
                                    <button className="font-extrabold" onClick={() => { AddRemoveServiceCode(s.code) }}>x</button>
                                </div>
                            ) : null
                        )
                    )}
                </div>
                <ExpandMoreIcon className="cursor-pointer" onClick={toggleDropdown} />
            </div>
            <div className="relative text-left z-10">
                {isOpen && (
                    <div className="absolute left-0 top-0 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg h-[300px] overflow-y-auto">
                        <button className="border mx-auto w-[100%] font-bold text-gray-600"
                            onClick={() => { setSelectedServices([]); setIsOpen(false); }}>Clear All</button>
                        <div className="p-2 flex-row">
                            {Services.map((service) => (
                                <React.Fragment key={service.category}>
                                    <p className="bg-orange-500 text-sm font-bold text-white rounded-md p-1">{service.category}</p>
                                    <hr />
                                    {service.services.map((s) => (
                                        <div key={s.code} className="flex items-center">
                                            <p className={`${selectedServices.includes(s.code) ? "bg-orange-200" : ""} text-sm p-1 w-[100%] rounded-md m-[1px] cursor-pointer`}
                                                onClick={() => { AddRemoveServiceCode(s.code) }}
                                                id={s.code}>{s.name}</p>
                                        </div>
                                    ))}
                                    <hr />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
