import { useMultiStep } from '../../context/MultiStepContext';
import { motion as m } from 'framer-motion';

interface Props {
    formStep: number;
    classes: string;
    children: React.ReactNode;
}

const FormSection = ({ formStep, classes, children }: Props) => {
    const { step: currentStep } = useMultiStep();

    const formStepActual = formStep - 1;
    if (formStepActual !== currentStep) return;

    return (
        <m.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'tween',
                duration: 0.3,
                delay: 0.1,
            }}
            className={classes}
        >
            {children}
        </m.section>
    );
};

export default FormSection;
