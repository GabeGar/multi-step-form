const stepTwoBaseStyles =
    'relative flex gap-3 rounded-lg border p-4 md:flex-col md:gap-6 md:pr-12 md:py-6 transition-all hover:border-primary-purplish-blue';

interface Props {
    id: string;
    imageSrc: string;
    alt: string;
    selectedPlan: string;
    isToggledYearly: boolean;
    children: React.ReactNode;
}

const StepTwoRow = ({
    id,
    isToggledYearly,
    selectedPlan,
    imageSrc,
    alt,
    children,
}: Props) => {
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
                {imageSrc && (
                    <img
                        className={`${
                            isToggledYearly ? 'self-start' : ''
                        } md:self-start`}
                        src={imageSrc}
                        alt={alt}
                    />
                )}
                <div>{children}</div>
            </div>
        </>
    );
};

export default StepTwoRow;
