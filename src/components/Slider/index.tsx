import { useState } from "react";
import rangeInput from "../../assets/rangeInput.svg";

export const Slider = () => {
    const [sliderValue, setSliderValue] = useState(8);

    const updateTextPosition = (event: React.FormEvent<HTMLInputElement>) => {
        const value = parseInt(event.currentTarget.value, 10);
        setSliderValue(value);
    };
    const textContainerStyle = {
        left: `calc(${(sliderValue / 100) * 100}% - ${
            window.innerWidth <= 500 ? "36px" : "44px"
        } + ${(sliderValue / 100) * (window.innerWidth <= 500 ? 10 : 18)}px)`,
    };
    return (
        <fieldset>
            <label
                htmlFor="customRange1"
                className="mb-1 inline-block text-primary dark:text-neutral-200"
            >
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
                    id="range"
                    className="bg-main w-full focus:outline-none h-1.5 focus:ring-purple-600 accent-focus cursor-pointer appearance rounded-lg "
                    value={sliderValue}
                    onChange={updateTextPosition}
                />
                <div
                    style={textContainerStyle}
                    className="relative flex items-center max-w-12 "
                >
                    <img
                        className="relative flex justify-center"
                        alt="range input"
                        src={rangeInput}
                    />
                    <span
                        className={`absolute text-xs text-focus 
                ${
                    sliderValue < 10
                        ? "left-[14px]"
                        : sliderValue <= 99
                        ? "left-[10px]"
                        : "left-[8px]"
                } top-2.5`}
                    >
                        {sliderValue}
                    </span>
                </div>
            </div>
        </fieldset>
    );
};
