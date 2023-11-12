import { useMultiStep } from '../../context/MultiStepContext';

const baseClasses = 'px-3 py-1 border rounded-full';
const activeClass = 'bg-primary-light-blue';

const stepIndicatorState = {
    inactive: baseClasses,
    active: `${baseClasses} ${activeClass}`,
};

const MultiStepIndicator = () => {
    const { step } = useMultiStep();

    return (
        <section className="flex gap-3 mt-10">
            {Array.from({ length: 4 }).map((_, i) => {
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
