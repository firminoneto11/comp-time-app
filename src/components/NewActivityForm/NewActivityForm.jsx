
// React Imports
import { useState, Fragment } from 'react';

// Custom imports
import CustomStepper from './CustomStepper';
import PhaseOneForm from './PhaseOneForm';
import PhaseTwoForm from './PhaseTwoForm';


export default function NewActivityForm() {

    const [phase, setPhase] = useState(0);

    return (
        <Fragment>
            <CustomStepper setPhase={setPhase} />
            {phase === 0 && <PhaseOneForm />}
            {phase === 1 && <PhaseTwoForm />}
        </Fragment>
    );
}
