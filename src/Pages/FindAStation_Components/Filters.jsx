import ServiceDropdown from "./ServicesDropDown";



export default function Filters({ Services, selectedServices, setSelectedServices }) {
    return (
        <div className="max-w-[1200px] min-w-[375px] mx-auto p-5">
            <div className="flex gap-4 ">
                <ServiceDropdown Services={Services} selectedServices={selectedServices} setSelectedServices={setSelectedServices} />
                <h1>This is a test</h1>
            </div>
        </div>
    );
}
