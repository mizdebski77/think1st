// PersonalInfoForm.tsx
import React from "react";
import { Input } from "../../Input";

interface PersonalInfoFormProps {
    name: string;
    setName: (value: string) => void;
    lastName: string;
    setLastName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
}) => {
    return (
        <div>
            <h1 className="text-2xl mb-6 text-primary font-medium">
                Personal Info
            </h1>
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
            />
        </div>
    );
};
