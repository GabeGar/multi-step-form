import { Plans } from '../../../shared/types';
import { capitalize } from '../../../utils/capitalize';
import PriceTierPara from './PriceTierPara';

const stepTwoBaseStyles =
    'relative flex gap-3 rounded-lg border p-4 md:flex-col md:gap-6 md:pr-12 md:py-6 transition-all hover:border-primary-purplish-blue';

interface Props {
    id: keyof Plans;
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
    const displayName = capitalize(id);
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
                <div>
                    <label
                        htmlFor="arcade"
                        className="font-bold text-primary-marine-blue"
                    >
                        {displayName}
                    </label>
                    <PriceTierPara
                        isToggledYearly={isToggledYearly}
                        plan={id}
                    />
                    {children}
                </div>
            </div>
        </>
    );
};

export default StepTwoRow;
