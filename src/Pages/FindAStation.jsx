import { TextField, InputAdornment, IconButton, Button, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


import { Stations } from "../Data/stations.js";


// Find Station page component
export default function FindAStation() {
    return (
        <div className="max-w-[1200px] min-w-[375px] h-[200px] mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 p-10 pl-10">
            <h1 className="text-2xl font-Inter font-extrabold text-white mb-2
            sm:text-3xl
            md:text-4xl">Find a station</h1>
            <TextField
                variant="outlined"
                slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="start">
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                   }
                }}
                className="bg-white rounded-lg shadow-md w-[80%]"
            />
        </div>
    );
}