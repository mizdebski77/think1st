import React from "react";

interface ButtonProps {
    disabled: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
    disabled,
    children,
    onClick,
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-6 py-2.5 px-8 text-[18px] rounded-md duration-300 text-textColor 
                  ${
                      disabled
                          ? "bg-main cursor-no-drop "
                          : "bg-focus hover:bg-buttonHover cursor-pointer "
                  }
                  `}
        >
            {children}
        </button>
    );
};
