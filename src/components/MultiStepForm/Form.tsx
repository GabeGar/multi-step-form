interface Props {
    id: string;
    children: React.ReactNode;
    onSubmit: React.FormEventHandler;
}

const Form = ({ id, onSubmit, children }: Props) => {
    return (
        <form
            id={id}
            onSubmit={onSubmit}
            className="mx-4 rounded-lg bg-neutral-alabaster px-6 py-8"
        >
            {children}
        </form>
    );
};

export default Form;
