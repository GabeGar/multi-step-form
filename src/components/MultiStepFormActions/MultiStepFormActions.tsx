import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';

const classes = 'mt-auto rounded-md p-3 text-neutral-alabaster font-semibold';

const MultiStepFormActions = () => {
    const { step, decreaseStep } = useMultiStep();
    const firstStep = STEPS.ONE - 1;
    const finalStep = STEPS.FOUR - 1;

    return (
        <div className="mt-auto flex w-full bg-neutral-white px-5 py-3">
            {step !== firstStep && (
                <button
                    className={`${classes} text-neutral-cool-gray`}
                    onClick={decreaseStep}
                >
                    Go Back
                </button>
            )}
            <button
                type="submit"
                form="multiStep"
                className={`${classes} ml-auto bg-primary-marine-blue`}
            >
                {step === finalStep ? 'Submit' : 'Next Step'}
            </button>
        </div>
    );
};

export default MultiStepFormActions;
