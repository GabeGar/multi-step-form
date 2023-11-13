import { motion as m } from 'framer-motion';
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
            {Array.from({ length: STEPS.FOUR }).map((_, i) => (
                <m.div
                    key={i}
                    initial={{
                        opacity: 0,
                        backgroundColor: 'hsla(206, 94%, 87%, 0)',
                    }}
                    animate={{
                        opacity: 1,
                        backgroundColor:
                            step === i
                                ? 'hsla(206, 94%, 87%, 1)'
                                : 'hsla(206, 94%, 87%, 0)',
                    }}
                    exit={{
                        opacity: 0,
                        backgroundColor: 'hsla(206, 94%, 87%, 0)',
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                    className={
                        step === i
                            ? `${stepIndicatorState.active}`
                            : `${stepIndicatorState.inactive}`
                    }
                >
                    {i + 1}
                </m.div>
            ))}
        </section>
    );
};

export default MultiStepIndicator;
