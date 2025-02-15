interface InputProps {
    text: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const Input = ({ text, type, onChange, value }: InputProps) => {
    return (
        <fieldset className="grid gap-2">
            <label className="text-primary">{text}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="px-4 py-[18px] bg-textColor rounded-lg h-12 w-full border border-main focus:outline-focus active:bg-active"
            />
        </fieldset>
    );
};
