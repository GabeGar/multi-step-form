interface Props {
    children: React.ReactNode;
}

const FormSectionHeader = ({ children }: Props) => {
    return <div className="flex flex-col gap-2">{children}</div>;
};

export default FormSectionHeader;
