import { ElementType } from "react";

interface TitleProps {
    text: string;
    as?: ElementType;
}

export const Title = ({ text, as: Component = "h2" }: TitleProps) => {
    return (
        <Component className="text-2xl mb-6 text-primary font-medium m-0">
            {text}
        </Component>
    );
};
