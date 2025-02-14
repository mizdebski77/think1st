interface ButtonProps {
    text: string;
    isFormValid: boolean;
}
export const Button = ({ text, isFormValid }: ButtonProps) => {
    return (
        <button
            type="submit"
            disabled={!isFormValid}
            className={`hover:bg-buttonHover duration-300 rounded-md bg-focus py-2.5 px-8 text-[18px] text-textColor group-invalid:bg-main mt-6 ${
                isFormValid ? "bg-main hover:bg-main" : ""
            }`}
        >
            {text}
        </button>
    );
};
