interface Props {
    children: React.ReactNode;
}

const ToggleSwitch = ({ children }: Props) => {
    return (
        <div className="flex justify-evenly rounded-lg bg-neutral-magnolia p-2">
            {children}
        </div>
    );
};

export default ToggleSwitch;
