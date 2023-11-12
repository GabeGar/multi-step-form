interface Props {
    label: string;
    htmlFor: string;
    error: string | undefined;
    children: React.ReactNode;
}

const FormRow = ({ label, htmlFor, error, children }: Props) => {
    return (
        <div className="text-primary-marine-blue">
            <label htmlFor={htmlFor}>{label}</label>
            {children}
            {error && (
                <p className="font-bold text-primary-strawberry-red">{error}</p>
            )}
        </div>
    );
};

export default FormRow;
