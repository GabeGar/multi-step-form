import { plans } from '../../../shared/constants';
import { Plans } from '../../../shared/types';

interface Props {
    isToggledYearly: boolean;
    plan: keyof Plans;
}

const PriceTierPara = ({ isToggledYearly, plan }: Props) => {
    const currentPlan = plans[plan];
    const { monthly: priceMonthly, yearly: priceYearly } = currentPlan;
    const currentPrice = isToggledYearly ? priceYearly : priceMonthly;
    const currentTimeSpan = isToggledYearly ? 'yr' : 'mo';

    return (
        <>
            <p className="text-neutral-cool-gray">
                ${currentPrice}/{currentTimeSpan}
            </p>
            {isToggledYearly && (
                <p className="text-sm text-primary-marine-blue">
                    2 months free
                </p>
            )}
        </>
    );
};

export default PriceTierPara;
