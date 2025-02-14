interface TitleProps {
    text: string;
}

export const Title = ({ text }: TitleProps) => {
    return <h1 className=" text-2xl mb-6 text-primary font-medium">{text}</h1>;
};
