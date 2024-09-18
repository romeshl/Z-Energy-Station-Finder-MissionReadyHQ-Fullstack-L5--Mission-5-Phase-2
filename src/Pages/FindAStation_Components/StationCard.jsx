import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function StationCard({ station }) {
    const [expandHours, setExpandHours] = useState(false);
    
    const toggleExpandHours = () => {
        setExpandHours(!expandHours);
    }

    return (
        <>
            <div className="flex flex-col gap-2 bg-white border rounded-md shadow-md p-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold text-blue-950">{station.name}</h1>
                    <p className="text-gray-700 font-bold text-sm">{station.address}</p>
                    <p className="text-gray-700 font-bold text-sm">{station.region}</p>
                    { station.isPayAtPump247 ? <p className="bg-orange-400 inline font-bold text-white rounded-md p-1 text-xs w-[30%] text-center ">Pay at Pump 24/7</p> : null }
                </div>
                <div className="flex items-center">
                    <p className="text-sm font-bold">Opening Hours</p>
                    <ExpandMoreIcon className="cursor-pointer" onClick={toggleExpandHours}></ExpandMoreIcon>
                </div>
                {expandHours && 
                <div className="grid grid-cols-2  w-[60%] text-xs">
                        {station.openingHours?.map((day, index) =>
                        {
                            return(
                                <><p key={index} className="text-gray-600 text-sm">{day.day}</p>
                                <p key={index} className="text-gray-600 text-sm">{day.hours}</p></>)
                        }
                        )}

                </div>}
            

                <div className="flex gap-2">
                    <div className="flex gap-2">
                        <h1 className="text-md font-bold text-gray-600">Services:</h1>
                        <div className="flex gap-2">
                            {station.services.map((service) => (
                                <span key={service.code} className="bg-gray-200 text-gray-600 rounded-md p-1 text-xs">{service.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <h1 className="text-md font-bold text-gray-600">Fuel:</h1>
                        <div className="flex gap-2">
                            {station.fuels.map((fuel) => (
                                <span key={fuel.code} className="bg-gray-200 text-gray-600 rounded-md p-1 text-xs">{fuel.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}