import { useMultiStep } from '../../context/MultiStepContext';

interface Props {
    formStep: number;
    classes: string;
    children: React.ReactNode;
}

const FormSection = ({ formStep, classes, children }: Props) => {
    const { step } = useMultiStep();

    const actualStep = formStep - 1;
    if (actualStep !== step) return;

    return <section className={classes}>{children}</section>;
};

export default FormSection;
