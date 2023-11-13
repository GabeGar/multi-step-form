interface Props {
    title: string;
    description: string;
}

const FormSectionHeader = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-primary-marine-blue">
                {title}
            </h2>
            <p className="text-neutral-cool-gray">{description}</p>
        </div>
    );
};

export default FormSectionHeader;
