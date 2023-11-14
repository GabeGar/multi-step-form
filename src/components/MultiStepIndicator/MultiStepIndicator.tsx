import { motion as m } from 'framer-motion';
import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';
import { useMQuery } from '../../context/MediaQueryContext';

const baseClasses =
    'px-3 py-1 border rounded-full first-of-type:md:mt-8 md:ml-8 md:relative';
const activeClass = 'bg-primary-light-blue';

const stepIndicatorState = {
    inactive: baseClasses,
    active: `${baseClasses} ${activeClass}`,
};

const stepDescriptions = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];

const MultiStepIndicator = () => {
    const { isDesktop } = useMQuery();
    const { step } = useMultiStep();

    return (
        <section className="mt-10 flex gap-3 md:mt-0 md:h-full md:flex-col md:items-start md:space-y-4 md:rounded-lg md:bg-sideBarDesktop md:bg-cover md:bg-center md:bg-no-repeat">
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
                            : `${stepIndicatorState.inactive} text-neutral-alabaster`
                    }
                >
                    {i + 1}
                    {isDesktop && (
                        <>
                            <div className="absolute left-12 top-0 text-[0.7rem]">
                                <h5 className="flex gap-1 uppercase text-neutral-cool-gray">
                                    <span>Step</span>
                                    <span>{i + 1}</span>
                                </h5>
                                <p className="min-w-max font-bold uppercase tracking-widest text-neutral-alabaster">
                                    {stepDescriptions[i]}
                                </p>
                            </div>
                        </>
                    )}
                </m.div>
            ))}
        </section>
    );
};

export default MultiStepIndicator;
