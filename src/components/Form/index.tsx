import { ReactNode } from "react";
interface FormProps {
    children: ReactNode;
}
export const Form = ({ children }: FormProps) => {
    return <form className="grid gap-6 group">{children}</form>;
};
