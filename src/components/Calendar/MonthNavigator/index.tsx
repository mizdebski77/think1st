import React from "react";
import next from "../../../assets/next.svg";
import prev from "../../../assets/prev.svg";

interface MonthNavigatorProps {
    currentYear: number;
    currentMonth: number;
    onChangeMonth: (step: number) => void;
}

export const MonthNavigator: React.FC<MonthNavigatorProps> = ({
    currentYear,
    currentMonth,
    onChangeMonth,
}) => {
    return (
        <div className="flex justify-between">
            <button
                type="button"
                onClick={() => onChangeMonth(-1)}
                className="mr-2 cursor-pointer"
            >
                <img src={prev} alt="Poprzedni miesiąc" />
            </button>
            <h3 className="text font-medium text-primary">
                {new Date(currentYear, currentMonth - 1, 1).toLocaleDateString(
                    "en-US",
                    {
                        month: "long",
                        year: "numeric",
                    }
                )}
            </h3>
            <button
                type="button"
                onClick={() => onChangeMonth(1)}
                className="ml-2 cursor-pointer"
            >
                <img src={next} alt="Następny miesiąc" />
            </button>
        </div>
    );
};
