
// React Imports
import { useState } from 'react';

// MUI Imports
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


export default function DateInput() {
    const [value, setValue] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker label="Pick a date" value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                onChange={(el) => console.log(el, typeof el)}
            />
        </LocalizationProvider>
    );
}

// Ele retorna um date object
