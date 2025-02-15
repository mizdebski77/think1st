// DayGrid.tsx
import React from "react";
import { MonthNavigator } from "../MonthNavigator";
import { WeekDays } from "../../../constants/Days";

interface HolidayProps {
    country: string;
    iso: string;
    year: number;
    date: string;
    day: string;
    name: string;
    type: string;
}

interface DayGridProps {
    currentYear: number;
    currentMonth: number;
    selectedDay: number | null;
    onDaySelect: (day: number) => void;
    holidays: HolidayProps[] | undefined;
    onChangeMonth: (step: number) => void; 
}

export const DayGrid: React.FC<DayGridProps> = ({
    currentYear,
    currentMonth,
    selectedDay,
    onDaySelect,
    holidays,
    onChangeMonth, // Odbieramy funkcję
}) => {
    const daysInMonth = (year: number, month: number) =>
        new Date(year, month, 0).getDate();
    const totalDays = daysInMonth(currentYear, currentMonth);
    const firstDayOfWeek =
        new Date(currentYear, currentMonth - 1, 1).getDay() || 7;

    const generateDays = () => {
        const days = [];

        // Puste komórki przed pierwszym dniem miesiąca
        for (let i = 1; i < firstDayOfWeek; i++) {
            days.push(
                <div
                    key={`empty-${i}`}
                    className="flex items-center justify-center"
                />
            );
        }

        // Generowanie dni miesiąca
        for (let day = 1; day <= totalDays; day++) {
            const isSelected = selectedDay === day;
            const dayOfWeek = new Date(
                currentYear,
                currentMonth - 1,
                day
            ).getDay();
            const formattedDate = `${currentYear}-${String(
                currentMonth
            ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isHoliday = holidays?.some(
                (holiday: HolidayProps) =>
                    holiday.date === formattedDate &&
                    holiday.type === "NATIONAL_HOLIDAY"
            );
            const isSunday = dayOfWeek === 0;
            const isDisabled = isSunday || isHoliday;

            days.push(
                <div
                    key={day}
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-primary 
            ${isSelected ? "text-white bg-focus" : ""} 
            ${isDisabled ? "text-textGrey cursor-no-drop" : "cursor-pointer"}`}
                    onClick={() => {
                        if (!isDisabled) onDaySelect(day);
                    }}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="px-6 py-4 pt-7 max-w-80 m-auto bg-textColor border border-main rounded-lg">
            <MonthNavigator
                currentYear={currentYear}
                currentMonth={currentMonth}
                onChangeMonth={onChangeMonth}
            />
            <div className="grid grid-cols-7 gap-2 mt-4">
                {WeekDays.map((day) => (
                    <div
                        key={day}
                        className="col-span-1 flex items-center justify-center font-medium text-sm"
                    >
                        {day}
                    </div>
                ))}
                {generateDays()}
            </div>
        </div>
    );
};
