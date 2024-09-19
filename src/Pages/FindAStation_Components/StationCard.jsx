import {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function StationCard({ station }) {
    const [expandHours, setExpandHours] = useState(false);
    const [expandServices, setExpandServices] = useState(false);
    
    const toggleExpandHours = () => {
        setExpandHours(!expandHours);
    }

    const toggleExpandServices = () => {    
        setExpandServices(!expandServices);
    }


    const getFuelColor = (fuelName) => {
        switch (fuelName) {
            case "Z Diesel":
                return "text-black";
            case "ZX Premium":
                return "text-red-500";
            case "Z91 Unleaded":
                return "text-green-500";
            default:
                return "";
        }
    };
    return (
        <>
            <div className="flex flex-col gap-2 bg-white shadow-md p-2 py-5 font-inter border-b-2">
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
                                <><p key={index} className="text-gray-600 text-xs">{day.day}</p>
                                <p key={index} className="text-gray-600 text-xs">{day.hours}</p></>)
                        }
                        )}

                </div>}
            
                <div className="flex items-center">
                    <p className="text-sm font-bold">Services</p>
                    <ExpandMoreIcon className="cursor-pointer" onClick={toggleExpandServices}></ExpandMoreIcon>
                </div>
                {expandServices &&
                    <div className="flex flex-wrap w-[90%] text-xs gap-1">
                        {station.services?.map((service) => {
                            return (
                                <><p key={service.code} className="border p-1 rounded-md bg-orange-500 text-white border-orange-800">{service.name}</p>
                               </>)
                        }
                        )}

                    </div>}
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-bold">Fuel Prices:</p>
                        <div className="flex gap-2">
                            {station.fuels.map((fuel, index) => (
                                <div key={index} className="flex flex-col gap-1 font-bold items-center border p-1 shadow-md rounded-md bg-orange-100 border-orange-200">
                                    <p key={index+2} className="text-xs  text-black">{fuel.name}</p>
                                    <p  key={index+3} className={`text-sm ${getFuelColor(fuel.name)}`}>{`$${fuel.price.toFixed(2)}`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}