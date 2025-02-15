import React from "react";
import { Calendar } from "../../Calendar";

interface WorkoutScheduleProps {
    onDaySelect: (date: Date) => void;
    onHourSelect: (hour: string) => void;
    resetTimeValues: () => void;
}

export const WorkoutSchedule: React.FC<WorkoutScheduleProps> = ({
    onDaySelect,
    onHourSelect,
    resetTimeValues,
}) => {
    return (
        <div>
            <h2 className="text-[24px] font-medium text-primary">
                Your Workout
            </h2>
            <Calendar
                onDaySelect={onDaySelect}
                onHourSelect={onHourSelect}
                resetTimeValues={resetTimeValues}
            />
        </div>
    );
};
