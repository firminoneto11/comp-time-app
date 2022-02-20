
// React Imports
import { useState, Fragment } from 'react';

// MUI Imports
import {
    FormControlLabel, FormGroup, Typography, Radio, RadioGroup, Box
} from '@mui/material';

// Custom Imports
import DateInput from '../DateInput';


export default function PhaseOneForm() {

    return (
        <Box sx={{ border: "1px solid white", padding: "50px", borderRadius: "5px" }}>

            <FormGroup>

                <Typography sx={{ mb: ".5rem" }}>
                    Choose a date
                </Typography>

                <DateInput />

            </FormGroup>

            <FormGroup>

                <Typography sx={{ mb: ".5rem", mt: "1rem" }}>
                    Will the hours be extra hours?
                </Typography>

                <RadioGroup row name="extra-hour" defaultValue="no">

                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />

                </RadioGroup>

            </FormGroup>

        </Box>
    );

}
