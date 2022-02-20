
// React Imports
import { useState, Fragment } from 'react';

// Custom imports
import CustomStepper from './CustomStepper';
import PhaseOneForm from './PhaseOneForm';
import PhaseTwoForm from './PhaseTwoForm';
import CentralizedContainer from '../CentralizedContainer';


export default function NewActivityForm() {

    const [phase, setPhase] = useState(0);

    return (
        <Fragment>

            <CustomStepper setPhase={setPhase}>

                <CentralizedContainer>
                    {phase === 0 && <PhaseOneForm />}
                    {phase === 1 && <PhaseTwoForm />}
                </CentralizedContainer>

            </CustomStepper>

        </Fragment>
    );
}
