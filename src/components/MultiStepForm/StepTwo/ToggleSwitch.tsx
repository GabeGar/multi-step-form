interface Props {
    isToggledYearly: boolean;
    children: React.ReactNode;
}

const ToggleSwitch = ({ isToggledYearly, children }: Props) => {
    return (
        <div className="flex justify-evenly rounded-lg bg-neutral-magnolia p-2">
            {/* https://flowbite.com/docs/forms/toggle/ */}
            <span
                className={`${
                    !isToggledYearly
                        ? 'text-primary-marine-blue'
                        : 'text-neutral-cool-gray'
                } font-bold`}
            >
                Monthly
            </span>
            <label className="relative cursor-pointer self-center">
                {/* children - input - is a peer */}
                {children}
                <div className="peer h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-marine-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
            </label>
            <span
                className={`${
                    isToggledYearly
                        ? 'text-primary-marine-blue'
                        : 'text-neutral-cool-gray'
                } font-bold`}
            >
                Yearly
            </span>
        </div>
    );
};

export default ToggleSwitch;
