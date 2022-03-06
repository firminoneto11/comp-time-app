
// React Imports
import { useState, Fragment } from 'react';

// Custom imports
import CustomStepper from './CustomStepper';
import PhaseOneForm from './PhaseOneForm';
import PhaseTwoForm from './PhaseTwoForm';
import CentralizedContainer from '../CentralizedContainer';


export default function NewActivityForm() {

    // Declaring states to save the current phase of the form
    const [phase, setPhase] = useState(0);

    // Declaring states to save the input's data from the first phase
    const [extraHourVal, setExtraHourVal] = useState(null);
    const [dateVal, setDateVal] = useState(null);
    const [firstPhaseValid, setFirstPhaseValid] = useState(false);

    // Creating a object with those states from first phase
    const phaseOneData = {
        extraHourVal,
        setExtraHourVal,
        dateVal,
        setDateVal
    }

    // Declaring states to save the input's data from the second phase
    const [secondPhaseValid, setSecondPhaseValid] = useState(false);

    // Creating a object that will check weather the phases are valid or invalid
    const validationData = {
        firstPhaseValid,
        setFirstPhaseValid,
        secondPhaseValid,
        setSecondPhaseValid
    }

    return (
        <Fragment>

            <CustomStepper setPhase={setPhase} validationData={validationData}>
                <CentralizedContainer>
                    {phase === 0 && (
                        <PhaseOneForm phaseOneData={phaseOneData} validationData={validationData.setFirstPhaseValid} />
                    )}
                    {phase === 1 && <PhaseTwoForm />}
                </CentralizedContainer>
            </CustomStepper>

        </Fragment>
    );
}
