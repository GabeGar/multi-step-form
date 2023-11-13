interface Props {
    isToggledYearly: boolean;
    priceMonthly: string;
}

const PriceTierPara = ({ isToggledYearly, priceMonthly }: Props) => {
    const priceYearly = String(Number(priceMonthly) * 10);

    return (
        <>
            <p className="text-neutral-cool-gray">
                ${isToggledYearly ? priceYearly : priceMonthly}/
                {isToggledYearly ? 'yr' : 'mo'}
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
