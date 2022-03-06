
// MUI Imports
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

// Importing the 'ptBR' locale
import { ptBR } from 'date-fns/locale';


export default function DateInput({ onChange: changeHandler, defaultValue: val }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <DatePicker label="Pick a date" value={val}
                onChange={(newValue) => changeHandler && changeHandler(newValue)}
                renderInput={(params) => <TextField {...params} value={val} />}
            />
        </LocalizationProvider>
    );
}
