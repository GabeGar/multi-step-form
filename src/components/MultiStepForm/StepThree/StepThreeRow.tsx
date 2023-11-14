import { AddOns } from '../../../shared/types';
import AddOnsPara from './AddOnsPara';

const stepThreeBaseStyles =
    'flex gap-3 rounded-lg border p-4 transition-all hover:border-primary-purplish-blue hover:cursor-pointer';

interface Props {
    isToggledYearly: boolean;
    isAddOnSelected: boolean;
    htmlFor: string;
    addOn: keyof AddOns;
    description: string;
    children: React.ReactNode;
    onChangeAddons: (addOn: keyof AddOns, value: boolean) => void;
}

const StepThreeRow = ({
    isAddOnSelected,
    children,
    addOn,
    onChangeAddons,
    ...props
}: Props) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const isCheckBoxClick = (e.target as HTMLElement).tagName === 'INPUT';

        if (isCheckBoxClick) {
            // If the click was on the checkbox, trigger onChangeAddons directly and return immediately, to prevent the subsequent re-call in the handler.
            onChangeAddons(addOn, !isAddOnSelected);
            return;
        }
        // A click on the label will trigger the onChange, on the input element, by default (via the id and htmlFor linkage). Thus, e.preventDefault().
        e.preventDefault();
        onChangeAddons(addOn, !isAddOnSelected);
    };

    return (
        <div
            className={`${stepThreeBaseStyles} ${
                isAddOnSelected
                    ? 'border-primary-purplish-blue bg-primary-pastel-blue/20'
                    : 'border-neutral-light-gray'
            }`}
            onClick={handleClick}
        >
            {children}
            <AddOnsPara addOn={addOn} {...props} />
        </div>
    );
};

export default StepThreeRow;
