import React from "react";

interface FileInputProps {
    fileName: string;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFileRemove: () => void;
}

export const FileInput: React.FC<FileInputProps> = ({
    fileName,
    onFileChange,
    onFileRemove,
}) => {
    const isSmallScreen = window.innerWidth <= 768;

    return (
        <fieldset className="grid gap-2">
            <label className="text-[#000853]">Photo</label>
            <div>
                <label
                    htmlFor="formFileLg"
                    className="cursor-pointer bg-white w-full h-24 flex justify-center items-center border rounded-lg border-[#cbb6e5]"
                >
                    <p className="text-base text-[#898DA9]">
                        <span
                            className={`${
                                fileName
                                    ? "text-[#000853] font-medium mr-2"
                                    : "text-[#761BE4] underline underline-offset-4"
                            }`}
                        >
                            {fileName
                                ? fileName
                                : isSmallScreen
                                ? "Upload file"
                                : "Upload a file"}
                        </span>
                        {!fileName &&
                            !isSmallScreen &&
                            " or drag and drop here"}
                    </p>
                    {fileName && (
                        <button
                            type="button"
                            className="bg-primary ml-2 text-textColor flex justify-center items-center duration-300  rounded-full w-6 h-6 text-xs hover:bg-error "
                            onClick={onFileRemove}
                        >
                            ✖
                        </button>
                    )}
                    <input
                        type="file"
                        id="formFileLg"
                        onChange={onFileChange}
                        className="hidden"
                        required
                    />
                </label>
            </div>
        </fieldset>
    );
};
