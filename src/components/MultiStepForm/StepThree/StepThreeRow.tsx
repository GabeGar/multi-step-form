import { AddOns } from '../../../shared/types';
import AddOnsPara from './AddOnsPara';

const stepThreeBaseStyles = 'flex gap-3 rounded-lg border p-4';

interface StepThreeRowProps {
    isToggledYearly: boolean;
    isAddOnSelected: boolean;
    htmlFor: string;
    addOn: keyof AddOns;
    description: string;
    children: React.ReactNode;
}

const StepThreeRow = ({
    isAddOnSelected,
    children,
    ...props
}: StepThreeRowProps) => {
    return (
        <div
            className={`${stepThreeBaseStyles} ${
                isAddOnSelected
                    ? 'border-primary-purplish-blue bg-primary-pastel-blue/20'
                    : 'border-neutral-light-gray'
            }`}
        >
            {children}
            <AddOnsPara {...props} />
        </div>
    );
};

export default StepThreeRow;
