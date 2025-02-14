interface InputProps {
    text: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const Input = ({ text, type, onChange, value }: InputProps) => {
    return (
        <fieldset className="grid gap-2">
            <label className="text-primary font-bold">{text}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="p-2 rounded-lg h-12 w-full border border-main focus:outline-focus active:bg-active"
            />
        </fieldset>
    );
};
