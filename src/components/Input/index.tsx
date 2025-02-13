interface InputProps {
    text: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const Input = ({ text, type, onChange, value }: InputProps) => {
    return (
        <fieldset className="grid gap-2">
            <label className="text-textMain font-normal">{text}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="p-2 rounded h-12"
            />
        </fieldset>
    );
};
