import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { UploadFlow } from './UploadFlow.js';

const Steps = () => {
    const [, setActiveStep] = useState(0);
    const nextStep = () => setActiveStep((prev) => prev + 1);
    return jsx(UploadFlow, { nextStep: nextStep });
};

export { Steps };
