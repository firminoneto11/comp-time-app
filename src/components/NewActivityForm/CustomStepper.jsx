
// React Imports
import { useState, Fragment } from 'react';

// MUI Imports
import {
    Box, Stepper, Step, StepLabel, Button, Typography, Alert, AlertTitle
} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CheckIcon from '@mui/icons-material/Check';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';


const steps = ['Pick a date and if it is about extra hours', 'Insert your hours'];


export default function CustomStepper({ setPhase, children, validationData: valid }) {

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

            {/* Rendering the steps */}
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {/* Rendering success components if the current step is equal to steps's length */}
            {activeStep === steps.length && (
                <Fragment>

                    <Alert severity="success" sx={{ mt: 2, mb: 1 }}>
                        <AlertTitle>Success</AlertTitle>
                        Hours saved successfully!
                    </Alert>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: "center" }}>
                        <Button onClick={handleReset} variant="outlined" endIcon={<RestartAltRoundedIcon />}>
                            Register again
                        </Button>
                    </Box>

                </Fragment>
            )}

            {/* Rendering these components if the current step is different than the steps's length */}
            {activeStep !== steps.length && (
                <Fragment>

                    <Typography variant='h5' sx={{ mt: 2, mb: 1, textAlign: "center" }}>
                        Step {activeStep + 1}
                    </Typography>

                </Fragment>
            )}

            {/* Rendering the children */}
            {children}

            {/* Rendering these components if the current step is different than the steps's length */}
            {activeStep !== steps.length && (
                <Fragment>

                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: "center" }}>

                        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}
                            startIcon={<KeyboardDoubleArrowLeftIcon />}>
                            Back
                        </Button>

                        <Button onClick={handleNext} variant="outlined"

                            disabled={activeStep === steps.length - 1 ? (
                                valid?.secondPhaseValid ? false : true
                            ) : valid?.firstPhaseValid ? false : true}

                            endIcon={activeStep === steps.length - 1 ? (
                                <CheckIcon />
                            ) : <KeyboardDoubleArrowRightIcon />}
                        >
                            {activeStep === steps.length - 1 ? 'Save hours' : 'Continue'}
                        </Button>

                    </Box>

                </Fragment>
            )}

        </Box>
    );
}
