import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';

const prevBtnClasses =
    'mt-auto rounded-md py-3 text-neutral-alabaster font-semibold';

const nextBtnClasses =
    'mt-auto rounded-md py-3 px-4 text-neutral-alabaster font-semibold';

const MultiStepFormActions = () => {
    const { step, decreaseStep } = useMultiStep();
    const firstStep = step === STEPS.ONE - 1;
    const finalStep = step === STEPS.FOUR - 1;

    return (
        <div className="mt-auto flex w-full bg-neutral-white px-5 py-3">
            {!firstStep && (
                <button
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
                        : 'bg-primary-marine-blue'
                } ml-auto`}
            >
                {finalStep ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    );
};

export default MultiStepFormActions;
