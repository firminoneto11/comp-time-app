
// React Imports
import { useState } from 'react';

// MUI Imports
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// Importing the 'ptBR' locale
import { ptBR } from 'date-fns/locale';


export default function DateInput() {
    const [value, setValue] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker label="Pick a date" value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} value={value} />}
            />
        </LocalizationProvider>
    );
}

// Ele retorna um date object
