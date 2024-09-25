import ServicesDropdown from "./ServicesDropDown";
import StationTypeDropDown from "./StationTypeDropDown";
import FuelTypeDropDown from "./FuelTypeDropDown";

import { resetAtom } from "../FindAStation";
import { useAtom } from "jotai";

export default function Filters() {
    const [, reset] = useAtom(resetAtom);

    return (
        <div className="max-w-[1200px] min-w-[375px] mx-auto p-5 font-inter flex flex-wrap gap-5 items-start justify-evenly">
            <div className="flex-row gap-4 ">
                <h1 className="text-md font-bold pl-2 text-gray-600">Services</h1>
                <ServicesDropdown  />
                
            </div>
            <div className="flex-row gap-4 ">
                <h1 className="text-md font-bold pl-2 text-gray-600">Station type</h1>
                <StationTypeDropDown />
            </div>

            <div className="flex-row gap-4 ">
                <h1 className="text-md font-bold pl-2 text-gray-600">Fuel type</h1>
                <FuelTypeDropDown  />
            </div>
            <div className="flex-row gap-4 mt-5">
                <button className="bg-orange-500 text-white rounded-3xl p-2 w-[120px]"
                    >Apply filters</button>
                
            </div>
            <div className="flex-row gap-4 mt-5">
            <button className="text-orange-500 rounded-md p-2 w-[100%] underline"
                onClick={reset}
                >Clear filters</button>
            </div>
        </div>
    );
}
