
// React Imports
import { useState, Fragment } from 'react';

// MUI Imports
import {
    Box, Stepper, Step, StepLabel, Button, Typography, Alert, AlertTitle
} from '@mui/material';


const steps = ['Pick a date and if it is about extra hours', 'Insert your hours'];


export default function CustomStepper({ setPhase }) {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => {
            const currentStep = prevActiveStep + 1;
            setPhase(currentStep);
            return currentStep;
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => {
            const currentStep = prevActiveStep - 1;
            setPhase(currentStep);
            return currentStep;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setPhase(0);
    };

    return (
        <Box sx={{ width: '100%' }}>

            {/*  */}
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {/*  */}
            {activeStep === steps.length ? (

                <Fragment>

                    <Alert severity="success" sx={{ mt: 2, mb: 1 }}>
                        <AlertTitle>Success</AlertTitle>
                        Hours saved successfully!
                    </Alert>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button onClick={handleReset}>Register again</Button>
                    </Box>

                </Fragment>

            ) : (

                <Fragment>

                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                            Back
                        </Button>

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Save hours' : 'Continue'}
                        </Button>

                    </Box>

                </Fragment>

            )}

        </Box>
    );
}
