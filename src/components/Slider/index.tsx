import React from "react";
import rangeInputImg from "../../assets/rangeInput.svg";

interface RangeInputProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput: React.FC<RangeInputProps> = ({ value, onChange }) => {
    const isSmallScreen = window.innerWidth <= 500;

    const textContainerStyle = {
        left: `calc(${(value / 100) * 100}% - ${
            isSmallScreen ? "36px" : "44px"
        } + ${(value / 100) * (isSmallScreen ? 10 : 18)}px)`,
    };

    return (
        <fieldset>
            <label htmlFor="range" className="mb-1 inline-block text-primary">
                Age
            </label>
            <label className="flex justify-between text-xs px-1">
                <span>8</span>
                <span>100</span>
            </label>
            <div className="relative">
                <input
                    type="range"
                    min={8}
                    max={100}
                    value={value}
                    onChange={onChange}
                    className="w-full h-1.5 rounded-lg appearance-none bg-gray-focus cursor-pointer accent-focus"
                    style={{
                        background: `linear-gradient(to right, #761BE4 ${
                            ((value - 8) / (100 - 8)) * 100
                        }%, #CBB6E5 ${((value - 8) / (100 - 8)) * 100}%)`,
                    }}
                />
                <div
                    style={textContainerStyle}
                    className="relative flex items-center"
                >
                    <img src={rangeInputImg} alt="range input" />
                    <span
                        className={`absolute text-xs text-focus top-2.5 ${
                            value < 10
                                ? "left-[14px]"
                                : value <= 99
                                ? "left-[10px]"
                                : "left-[8px]"
                        }`}
                    >
                        {value}
                    </span>
                </div>
            </div>
        </fieldset>
    );
};
