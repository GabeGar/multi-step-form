interface Props {
    isToggledYearly: boolean;
    htmlFor: string;
    description: string;
    priceMonthly: string;
}

const AddOnsPara = ({
    isToggledYearly,
    htmlFor,
    description,
    priceMonthly,
}: Props) => {
    const priceYearly = String(Number(priceMonthly) * 10);
    const timeSpan = isToggledYearly ? 'yr' : 'mo';
    const actualPrice = isToggledYearly ? priceYearly : priceMonthly;

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
                +${actualPrice}/{timeSpan}
            </p>
        </div>
    );
};

export default AddOnsPara;
