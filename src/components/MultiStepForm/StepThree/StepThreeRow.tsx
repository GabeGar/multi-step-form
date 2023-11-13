const stepThreeBaseStyles = 'flex gap-3 rounded-lg border p-4';

interface Props {
    children: React.ReactNode;
}

const StepThreeRow = ({ children }: Props) => {
    return <div className={stepThreeBaseStyles}>{children}</div>;
};

export default StepThreeRow;
