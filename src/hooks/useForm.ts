import { useState, useEffect } from "react";
import axios from "axios";

const validateEmail = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

export const useForm = () => {
    const [sliderValue, setSliderValue] = useState(8);
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState("");
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<string | null>(null);
    const [selectedHourOfDay, setSelectedHourOfDay] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    useEffect(() => {
        const emailValid = validateEmail(email);
        setIsEmailValid(emailValid);

        const formValid =
            name.trim() !== "" &&
            lastName.trim() !== "" &&
            email.trim() !== "" &&
            emailValid &&
            selectedDayOfWeek !== null &&
            selectedHourOfDay !== null &&
            file !== null;

        setIsFormValid(formValid);
    }, [name, lastName, email, selectedDayOfWeek, selectedHourOfDay, file]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(e.currentTarget.value, 10));
    };

    const handleDaySelect = (date: Date) => {
        setSelectedDayOfWeek(date.toISOString().split("T")[0]);
    };

    const handleHourSelect = (hour: string) => {
        if (!selectedDayOfWeek) {
            alert("Najpierw wybierz dzień.");
            return;
        }
        setSelectedHourOfDay(hour);
    };

    const resetTimeValues = () => {
        setSelectedDayOfWeek(null);
        setSelectedHourOfDay(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isEmailValid) {
            alert("Proszę podać poprawny adres e-mail.");
            return;
        }

        if (!file) {
            alert("Proszę wybrać plik przed wysłaniem.");
            return;
        }

        const formData = new FormData();
        formData.append("Name", name);
        formData.append("Last Name", lastName);
        formData.append("E-Mail", email);
        formData.append("Age", sliderValue.toString());
        formData.append("File", file);
        formData.append("Day", selectedDayOfWeek || "");
        formData.append("Hour", selectedHourOfDay || "");

        try {
            await axios.post("http://letsworkout.pl/submit", formData);
            console.log("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Wystąpił błąd przy wysyłaniu formularza.");
        }
    };

    return {
        sliderValue,
        fileName,
        name,
        lastName,
        email,
        isFormValid,
        isEmailValid,
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
    };
};
