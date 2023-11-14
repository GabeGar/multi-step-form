import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';

const prevBtnClasses =
    'mt-auto rounded-md py-3 text-neutral-alabaster font-semibold transition-all hover:text-primary-marine-blue';

const nextBtnClasses =
    'mt-auto rounded-md py-3 px-4 text-neutral-alabaster font-semibold transition-all md:px-5';

const MultiStepFormActions = () => {
    const { step, decreaseStep, complete } = useMultiStep();
    const firstStep = step === STEPS.ONE - 1;
    const finalStep = step === STEPS.FOUR - 1;

    return (
        <div
            className={`mt-auto flex w-full bg-neutral-white px-5 py-3 md:p-0 ${
                complete ? 'pointer-events-none opacity-0' : ''
            }`}
        >
            {!firstStep && (
                <button
                    type="button"
                    className={`${prevBtnClasses} text-neutral-cool-gray`}
                    onClick={decreaseStep}
                >
                    Go Back
                </button>
            )}
            <button
                type="submit"
                form="multiStep"
                className={`${nextBtnClasses} ${
                    finalStep
                        ? 'bg-primary-purplish-blue'
                        : 'bg-primary-marine-blue hover:bg-primary-marine-blue/90'
                } ml-auto`}
            >
                {finalStep ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    );
};

export default MultiStepFormActions;
