interface Props {
    label: string;
    htmlFor: string;
    error: string | undefined;
    children: React.ReactNode;
}

const StepOneRow = ({ label, htmlFor, error, children }: Props) => {
    return (
        <div className="flex flex-col text-primary-marine-blue">
            <label htmlFor={htmlFor} className="flex-1">
                {label}
            </label>
            {children}
            {error && (
                <p className="font-bold text-primary-strawberry-red">{error}</p>
            )}
        </div>
    );
};

export default StepOneRow;
