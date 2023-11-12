import { createContext, useContext, useState } from 'react';

interface Props {
    children: React.ReactNode;
}

const MultiStepContext = createContext<{
    step: number;
    increaseStep: () => void;
    decreaseStep: () => void;
} | null>(null);

const MultiStepContextProvider = ({ children }: Props) => {
    const [step, setStep] = useState(0);

    const increaseStep = () => {
        // Handle step change on successfully submitted step
        setStep((step) => (step + 1 > 3 ? 3 : step + 1));

        // Handle step change on go-back click
    };
    const decreaseStep = () => {
        // Handle step change on successfully submitted step
        setStep((step) => (step - 1 < 0 ? 0 : step - 1));

        // Handle step change on go-back click
    };

    return (
        <MultiStepContext.Provider
            value={{
                step,
                increaseStep,
                decreaseStep,
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
