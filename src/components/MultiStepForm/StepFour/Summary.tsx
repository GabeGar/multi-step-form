import { addOns, plans } from '../../../shared/constants';
import { timeSpanText } from '../../../shared/constants';
import { AddOns, Plans } from '../../../shared/types';
import { capitalize } from '../../../utils/capitalize';
import { getDisplayName } from '../../../utils/getDisplayName';

interface Props {
    onToggleYearly: () => void;
    selectedPlan: keyof Plans;
    isToggledYearly: boolean;
    wantsOnlineService: boolean;
    wantsLargeStorage: boolean;
    wantsCustomizableProfile: boolean;
}

const Summary = ({
    onToggleYearly,
    selectedPlan,
    isToggledYearly,
    wantsOnlineService,
    wantsLargeStorage,
    wantsCustomizableProfile,
}: Props) => {
    const possibleAddons = Object.keys(addOns) as (keyof AddOns)[];
    const currentPlanCapitalized = capitalize(selectedPlan);
    const currentPlanPricing = plans[selectedPlan];
    const { monthly: currentPlanMonthly, yearly: currentPlanYearly } =
        currentPlanPricing;

    const currentPricing = isToggledYearly
        ? currentPlanYearly
        : currentPlanMonthly;
    const planTimeSpanText = isToggledYearly
        ? timeSpanText.yearly.fullCapitalized
        : timeSpanText.month.fullCapitalized;
    const planAddonTotalTimeSpanText = isToggledYearly
        ? timeSpanText.yearly.short
        : timeSpanText.month.short;
    const totalTimeSpanText = isToggledYearly
        ? timeSpanText.yearly.full
        : timeSpanText.month.full;

    let total = 0;
    total += currentPricing;

    return (
        <>
            <div className="rounded-lg bg-primary-light-blue/20 px-4 py-5 text-neutral-cool-gray">
                <h2 className="font-bold text-primary-marine-blue">
                    {currentPlanCapitalized} ({planTimeSpanText})
                </h2>
                <p className="flex justify-between">
                    <button
                        type="button"
                        className="underline transition-all hover:text-primary-purplish-blue/80"
                        onClick={() => {
                            onToggleYearly();
                        }}
                    >
                        Change
                    </button>
                    <span className="font-bold text-primary-marine-blue">
                        ${currentPricing}/{planAddonTotalTimeSpanText}
                    </span>
                </p>
                <hr className="my-3" />

                <ul className="space-y-2">
                    {possibleAddons.map((addOn) => {
                        if (
                            (addOn === 'onlineService' && wantsOnlineService) ||
                            (addOn === 'largeStorage' && wantsLargeStorage) ||
                            (addOn === 'customizableProfile' &&
                                wantsCustomizableProfile)
                        ) {
                            const {
                                monthly: currentAddOnMonthlyPrice,
                                yearly: currentAddOnYearlyPrice,
                            } = addOns[addOn];

                            const currentAddonPrice = isToggledYearly
                                ? currentAddOnYearlyPrice
                                : currentAddOnMonthlyPrice;
                            const displayName = getDisplayName(addOn);

                            total += currentAddonPrice;

                            return (
                                <li key={addOn}>
                                    <p className="flex justify-between text-primary-marine-blue">
                                        <span className="text-neutral-cool-gray">
                                            {displayName}
                                        </span>
                                        <span>
                                            +${currentAddonPrice}/
                                            {planAddonTotalTimeSpanText}
                                        </span>
                                    </p>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>

            <div className="flex justify-between px-4 pt-3">
                <span className="text-neutral-cool-gray">
                    Total (per {totalTimeSpanText})
                </span>
                <span className="font-bold text-primary-purplish-blue md:text-xl">
                    +${total}/{planAddonTotalTimeSpanText}
                </span>
            </div>
        </>
    );
};

export default Summary;
