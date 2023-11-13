import { useMultiStep } from '../../context/MultiStepContext';

interface Props {
    formStep: number;
    classes: string;
    children: React.ReactNode;
}

const FormSection = ({ formStep, classes, children }: Props) => {
    const { step: currentStep } = useMultiStep();

    const formStepActual = formStep - 1;
    if (formStepActual !== currentStep) return;

    return <section className={classes}>{children}</section>;
};

export default FormSection;
