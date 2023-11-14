import { createContext, useContext, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

const MultiStepContext = createContext<{
    step: number;
    complete: boolean;
    increaseStep: () => void;
    decreaseStep: () => void;
    onComplete: () => void;
} | null>(null);

const MultiStepContextProvider = ({ children }: Props) => {
    const [step, setStep] = useState(0);
    const [complete, setComplete] = useState(false);

    const increaseStep = () => {
        setStep((step) => (step + 1 > 3 ? 3 : step + 1));
    };
    const decreaseStep = () => {
        setStep((step) => (step - 1 < 0 ? 0 : step - 1));
    };

    const onComplete = () => {
        setComplete(true);
    };

    return (
        <MultiStepContext.Provider
            value={{
                step,
                complete,
                increaseStep,
                decreaseStep,
                onComplete,
            }}
        >
            {children}
        </MultiStepContext.Provider>
    );
};

const useMultiStep = () => {
    const context = useContext(MultiStepContext);
    if (context === null)
        throw new Error(
            'MultiStepContext was used outside MultiStepContextProvider',
        );
    return context;
};

export default MultiStepContextProvider;
export { useMultiStep };
