import React, { useState } from "react";
import { DayGrid } from "./DayGrid";
import { HolidayIndicator } from "./HolidayIndicator";
import { TimeSelector } from "./TimeSelector";
import { useHolidays } from "../../hooks/useHolidays";

interface CalendarProps {
    onDaySelect: (date: Date) => void;
    onHourSelect: (hour: string) => void;
    resetTimeValues: () => void;
}

export const Calendar: React.FC<CalendarProps> = ({
    onDaySelect,
    onHourSelect,
    resetTimeValues,
}) => {
    const [currentYear, setYear] = useState(2024);
    const [currentMonth, setMonth] = useState(1);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);
    const [selectedHour, setSelectedHour] = useState("");

    const { isLoading, error, data } = useHolidays();
    const holidays = data?.data;

    const changeMonth = (step: number) => {
        let newMonth = currentMonth + step;
        let newYear = currentYear;
        if (newMonth < 1) {
            newMonth = 12;
            newYear--;
        } else if (newMonth > 12) {
            newMonth = 1;
            newYear++;
        }
        setMonth(newMonth);
        setYear(newYear);
        setSelectedDay(null);
        setSelectedHour("");
        resetTimeValues();
    };

    const handleDaySelect = (day: number) => {
        const selectedDate = new Date(currentYear, currentMonth - 1, day);
        setSelectedDay(day);
        onDaySelect(selectedDate);
        setSelectedHour("");
    };

    const handleHourSelect = (hour: string) => {
        setSelectedHour(hour);
        onHourSelect(hour);
    };

    return (
        <div className="sm:flex grid sm:justify-start w-full gap-6">
            {isLoading ? (
                <span className="text-xl">Downloading holiday data...</span>
            ) : error ? (
                <span className="text-xl">Oops! Something went wrong...</span>
            ) : (
                <div className="grid gap-2">
                    <span className="text-primary">Date</span>
                    <DayGrid
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        selectedDay={selectedDay}
                        onDaySelect={handleDaySelect}
                        holidays={holidays}
                        onChangeMonth={changeMonth}
                    />
                    {selectedDay && (
                        <HolidayIndicator
                            currentYear={currentYear}
                            currentMonth={currentMonth}
                            selectedDay={selectedDay}
                            holidays={holidays}
                        />
                    )}
                </div>
            )}
            <div>
                {selectedDay && (
                    <TimeSelector
                        selectedHour={selectedHour}
                        onHourSelect={handleHourSelect}
                    />
                )}
            </div>
        </div>
    );
};
