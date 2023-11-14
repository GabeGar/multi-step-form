import { useMQuery } from '../../../context/MediaQueryContext';

interface Props {
    label: string;
    htmlFor: string;
    error: string | undefined;
    children: React.ReactNode;
}

const StepOneRow = ({ label, htmlFor, error, children }: Props) => {
    const { isDesktop } = useMQuery();

    return (
        <div className="flex flex-col text-primary-marine-blue">
            <div className="md:flex">
                <label htmlFor={htmlFor} className="flex-1">
                    {label}
                </label>
                {error && isDesktop && (
                    <p className="text-sm font-bold text-primary-strawberry-red">
                        {error}
                    </p>
                )}
            </div>
            {children}
            {error && !isDesktop && (
                <p className="text-sm font-bold text-primary-strawberry-red">
                    {error}
                </p>
            )}
        </div>
    );
};

export default StepOneRow;
