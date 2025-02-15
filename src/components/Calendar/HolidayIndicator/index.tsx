// HolidayIndicator.tsx
import React from "react";
import holidayName from "../../../assets/holidayName.svg";

interface HolidayProps {
    country: string;
    iso: string;
    year: number;
    date: string;
    day: string;
    name: string;
    type: string;
}

interface HolidayIndicatorProps {
    currentYear: number;
    currentMonth: number;
    selectedDay: number;
    holidays: HolidayProps[] | undefined;
}

export const HolidayIndicator: React.FC<HolidayIndicatorProps> = ({
    currentYear,
    currentMonth,
    selectedDay,
    holidays,
}) => {
    const formattedDate = `${currentYear}-${String(currentMonth).padStart(
        2,
        "0"
    )}-${String(selectedDay).padStart(2, "0")}`;
    const holiday = holidays?.find(
        (holiday) =>
            holiday.date === formattedDate &&
            (holiday.type === "NATIONAL_HOLIDAY" || holiday.type === "OBSERVANCE")
    );
    

    if (!holiday) return null;

    console.log("Formatted Date:", formattedDate);
    console.log("Holidays Data:", holidays);

    return (
        <span className="text-primary flex gap-2 mt-1">
            <img src={holidayName} alt="Holiday Name Icon" />
            It is {holiday.name}.
        </span>
    );
};
