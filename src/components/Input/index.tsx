import validation from "../../assets/validation.svg";

interface InputProps {
    text: string;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    pattern?: string;
}

export const Input = ({ text, type, onChange, value, pattern }: InputProps) => {
    return (
        <fieldset className="grid gap-2">
            <label className="text-primary">{text}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="px-4 py-[18px] bg-textColor rounded-lg h-12 w-full border border-main focus:outline-focus active:bg-active peer
                           invalid:[&:not(:placeholder-shown):not(:focus)]:border-error 
                           invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 
                           invalid:[&:not(:placeholder-shown):not(:focus)]:bg-invalid"
                pattern={pattern}
                required={type === "email"} // Dodaj required dla pola email
                placeholder=" " // Dodaj pusty placeholder
            />
            {type === "email" && (
                <span className="text-primary hidden text-sm peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                    <div className="flex gap-2 items-start">
                        <img
                            src={validation}
                            alt="validation"
                            className="mt-1 font-medium"
                        />
                        <span>
                            Please use correct formatting.
                            <p>Example: address@email.com</p>
                        </span>
                    </div>
                </span>
            )}
        </fieldset>
    );
};
