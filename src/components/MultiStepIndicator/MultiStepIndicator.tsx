import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';

const baseClasses = 'px-3 py-1 border rounded-full';
const activeClass = 'bg-primary-light-blue';

const stepIndicatorState = {
    inactive: baseClasses,
    active: `${baseClasses} ${activeClass}`,
};

const MultiStepIndicator = () => {
    const { step } = useMultiStep();

    return (
        <section className="mt-10 flex gap-3">
            {Array.from({ length: STEPS.FOUR }).map((_, i) => {
                return (
                    <div
                        key={i}
                        className={
                            step === i
                                ? `${stepIndicatorState.active}`
                                : `${stepIndicatorState.inactive}`
                        }
                    >
                        {i + 1}
                    </div>
                );
            })}
        </section>
    );
};

export default MultiStepIndicator;
