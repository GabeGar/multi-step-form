const stepThreeBaseStyles = 'flex gap-3 rounded-lg border p-4';

interface Props {
    isAddOnSelected: boolean;
    children: React.ReactNode;
}

const StepThreeRow = ({ isAddOnSelected, children }: Props) => {
    return (
        <div
            className={`${stepThreeBaseStyles} ${
                isAddOnSelected
                    ? 'border-primary-purplish-blue  bg-primary-pastel-blue/20'
                    : 'border-neutral-light-gray'
            }`}
        >
            {children}
        </div>
    );
};

export default StepThreeRow;
