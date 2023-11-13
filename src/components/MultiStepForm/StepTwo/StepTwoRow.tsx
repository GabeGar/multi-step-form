const stepTwoBaseStyles = 'relative flex gap-3 rounded-lg border p-4';

interface Props {
    id: string;
    imageSrc: string;
    alt: string;
    selectedPlan: string;
    children: React.ReactNode;
}

const StepTwoRow = ({ id, selectedPlan, imageSrc, alt, children }: Props) => {
    const isSelected = id === selectedPlan;

    return (
        <>
            <div
                className={`${stepTwoBaseStyles} ${
                    isSelected
                        ? 'border-primary-purplish-blue  bg-primary-pastel-blue/20'
                        : 'border-neutral-light-gray'
                }`}
            >
                {imageSrc && <img src={imageSrc} alt={alt} />}
                <div>{children}</div>
            </div>
        </>
    );
};

export default StepTwoRow;
