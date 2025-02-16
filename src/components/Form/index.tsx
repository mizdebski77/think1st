import React from "react";
import { RangeInput } from "../Slider";
import { Button } from "../Button";
import { Calendar } from "../Calendar";
import { Input } from "../Input";
import { FileUploader } from "../FileInput";
import { useForm } from "../../hooks/useForm";

export const Form: React.FC = () => {
    const {
        sliderValue,
        fileName,
        name,
        lastName,
        email,
        isFormValid,
        handleSliderChange,
        handleDaySelect,
        handleHourSelect,
        resetTimeValues,
        handleSubmit,
        setName,
        setLastName,
        setEmail,
        setFileName,
        setFile,
    } = useForm();

    return (
        <div className="max-w-[426px] m-auto">
            <h1 className="text-2xl mb-8 text-primary font-medium">
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
