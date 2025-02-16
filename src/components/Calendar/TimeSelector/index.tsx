import React from "react";
import { Hours } from "../../../constants/Hours";

interface TimeSelectorProps {
    selectedHour: string;
    onHourSelect: (hour: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
    selectedHour,
    onHourSelect,
}) => {
    return (
        <div className="grid gap-2">
            <span className="text-primary">Time</span>
            <div className="flex flex-wrap gap-2 sm:grid">
                {Hours.map((hour) => (
                    <div
                        key={hour}
                        className={`w-[76px] h-[46px] flex items-center justify-center bg-white rounded-lg border cursor-pointer ${
                            selectedHour === hour
                                ? "border-2 border-focus"
                                : "border-main"
                        }`}
                        onClick={() => onHourSelect(hour)}
                    >
                        {hour}
                    </div>
                ))}
            </div>
        </div>
    );
};
