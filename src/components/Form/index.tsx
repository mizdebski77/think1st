import React, { useEffect, useState } from "react";
import { RangeInput } from "../Slider";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import axios from "axios";
import { Input } from "../Input";
import { FileUploader } from "../FileInput";

export const Form: React.FC = () => {
    const [sliderValue, setSliderValue] = useState(8);
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<string | null>(
        null
    );
    const [selectedHourOfDay, setSelectedHourOfDay] = useState<string | null>(
        null
    );
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(
            name.trim() !== "" &&
                lastName.trim() !== "" &&
                email.trim() !== "" &&
                selectedDayOfWeek !== null &&
                selectedHourOfDay !== null
        );
    }, [name, lastName, email, selectedDayOfWeek, selectedHourOfDay]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.currentTarget.value, 10));
    };

    const handleDaySelect = (date: Date) => {
        setSelectedDayOfWeek(date.toDateString());
    };

    const handleHourSelect = (hour: string) => {
        setSelectedHourOfDay(hour);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Last Name", lastName);
        formData.append("E-Mail", email);
        formData.append("Age", sliderValue.toString());
        if (file) {
            formData.append("File", file);
        }
        formData.append("Day", selectedDayOfWeek || "");
        formData.append("Hour", selectedHourOfDay || "");

        try {
            await axios.post("http://letsworkout.pl/submit", formData);
            console.log("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    };

    const resetTimeValues = () => {
        setSelectedDayOfWeek(null);
        setSelectedHourOfDay(null);
    };

    return (
        <div className="max-w-[426px] m-auto">
            <h1 className=" text-2xl mb-8 text-primary font-medium">
                Personal Info
            </h1>
            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="grid gap-6"
            >
                <Input
                    text="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    text="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                    text="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />

                <RangeInput value={sliderValue} onChange={handleSliderChange} />
                <FileUploader
                    fileName={fileName}
                    setFileName={setFileName}
                    setFile={setFile}
                />
                <h2 className="text-2xl font-medium mt-[24px] text-primary">
                    Your Workout
                </h2>
                <Calendar
                    onDaySelect={handleDaySelect}
                    onHourSelect={handleHourSelect}
                    resetTimeValues={resetTimeValues}
                />
                <Button type="submit" disabled={!isFormValid}>
                    Send Application
                </Button>
            </form>
        </div>
    );
};
