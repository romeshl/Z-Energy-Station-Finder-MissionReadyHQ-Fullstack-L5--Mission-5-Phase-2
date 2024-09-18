import React, { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { v4 as uuid4 } from 'uuid';

export default function ServiceDropdown({Services, selectedServices, setSelectedServices}) {
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

    console.log(selectedServices);
    return (
        <div className="flex-row w-[320px] font-intra select-none border-2 border-gray-200 rounded-md p-2
            focus:border-orange-500" ref={divRef}
            tabIndex={uuid4().toString()}>
            <div className="flex items-center " >
                <div className="flex  flex-wrap items-center w-[350px]"  >
                    {selectedServices.length === 0 ? <p className="">Services</p> : null}
                    {Services.map((service, index) => {
                        return (<>
                            {service.services.map((service, index) => {
                                return (
                                    <>
                                        {selectedServices.includes(service.code) &&
                                            <div className="text-xs border m-1 p-1 border-orange-900 rounded-md bg-orange-200 flex items-center gap-1 "
                                                key={index}><p>{service.name}</p>
                                                <button className="font-extrabold" onClick={() => { AddRemoveServiceCode(service.code) }}>x</button>
                                            </div>}
                                    </>)
                            })}
                        </>)

                    })}

                </div>
                <ExpandMoreIcon className="cursor-pointer" onClick={toggleDropdown} />
            </div>
            <div className="relative text-left">
                {isOpen && (
                    <div className="absolute left-0 top-0 w-[300px] bg-white border border-gray-300 rounded-md shadow-lg rounded-lg"
                    >
                        <button className="border mx-auto w-[100%] font-bold text-gray-600" onClick={() => { setSelectedServices([]); }}>Clear All</button>
                        <div className="p-2 flex-row">
                            {Services.map((service, index) => {
                                return (<>
                                    <p className="bg-orange-500  text-sm font-bold text-white rounded-md p-1 " key={index}>{service.category}</p>
                                    <hr />
                                    {service.services.map((service, index) => {
                                        return (
                                            <div key={index} className="flex items-center">
                                                <p className={`${selectedServices.includes(service.code) ? "bg-orange-200" : ""} text-sm p-1 w-[100%] rounded-md m-[1px] cursor-pointer`}
                                                    onClick={() => { AddRemoveServiceCode(service.code) }}
                                                    id={service.code}>{service.name}</p>
                                            </div>
                                        )
                                    })}
                                    <hr />
                                </>)
                            })}
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
