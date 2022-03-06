
// MUI Imports
import {
    FormControlLabel, FormGroup, Typography, Radio, RadioGroup, Box
} from '@mui/material';

// Moment.js
import moment from 'moment';

// Custom Imports
import DateInput from '../DateInput';


export default function PhaseOneForm({ phaseOneData, validationData: setFirstPhaseValid }) {

    // Destructuring the state and setState functions
    const { extraHourVal, setExtraHourVal, dateVal, setDateVal } = phaseOneData;

    const dateIsValid = (d) => {
        if (!d) return false;
        try {
            const isValid = moment(d.toLocaleDateString(), 'DD/MM/YYYY', true).isValid();
            return isValid;
        }
        catch (e) {
            return false;
        }
    }

    return (
        <Box sx={{ border: "1px solid white", padding: "50px", borderRadius: "5px" }}>

            <FormGroup>
                <Typography sx={{ mb: ".5rem" }}>Choose a date *</Typography>
                <DateInput defaultValue={dateVal} onChange={(val) => {
                    setDateVal(val);
                    dateIsValid(val) ? setFirstPhaseValid(true) : setFirstPhaseValid(false);
                }}
                />
            </FormGroup>

            <FormGroup>
                <Typography sx={{ mb: ".5rem", mt: "1rem" }}>Will the hours be extra hours?</Typography>
                <RadioGroup row defaultValue={extraHourVal ? extraHourVal : 'no'}
                    onChange={(event) => setExtraHourVal(event.target.value)}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormGroup>

        </Box>
    );

}
