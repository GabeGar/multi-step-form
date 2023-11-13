import { addOns } from '../../../shared/constants';
import { AddOns } from '../../../shared/types';

interface Props {
    isToggledYearly: boolean;
    htmlFor: string;
    description: string;
    addOn: keyof AddOns;
}

const AddOnsPara = ({
    isToggledYearly,
    htmlFor,
    description,
    addOn,
}: Props) => {
    const currentAddOn = addOns[addOn];
    const { monthly: priceMonthly, yearly: priceYearly } = currentAddOn;

    const currentPrice = isToggledYearly ? priceYearly : priceMonthly;
    const currentTimeSpan = isToggledYearly ? 'yr' : 'mo';

    return (
        <div className="flex flex-1 items-center">
            <div className="flex-1">
                <label
                    className="font-bold text-primary-marine-blue"
                    htmlFor={htmlFor}
                >
                    {htmlFor}
                </label>
                <p className="text-[0.8rem] text-neutral-cool-gray">
                    {description}
                </p>
            </div>
            <p className="text-sm text-primary-purplish-blue">
                +${currentPrice}/{currentTimeSpan}
            </p>
        </div>
    );
};

export default AddOnsPara;
