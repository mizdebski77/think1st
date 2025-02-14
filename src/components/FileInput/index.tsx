import { useState } from "react";

export const FileInput = () => {
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        if (file) {
            const validImageTypes = [
                "image/jpeg",
                "image/png",
                "image/JPG",
                "image/PNG",
            ];

            if (validImageTypes.includes(file.type)) {
                setFile(file);
                setFileName(file.name);
            } else {
                alert("Please upload a JPG or PNG file.");
            }
        }
    };

    const handleFileRemove = () => {
        setFile(null);
        setFileName("");
    };

    const isSmallScreen = window.innerWidth <= 768;

    return (
        <fieldset className="grid  gap-2">
            <label className="text-primary">Photo</label>
            <div>
                <label
                    htmlFor="formFileLg"
                    className="cursor-pointer bg-textColor w-full h-24 flex justify-center items-center border rounded-lg border-main"
                >
                    <p className="text-base text-textGrey dark:text-gray-400 ">
                        <span
                            className={`${
                                fileName
                                    ? "text-primary  font-medium mr-2"
                                    : "text-focus underline underline-offset-4 font-regular mr-2"
                            }`}
                        >
                            {fileName
                                ? fileName
                                : isSmallScreen
                                ? "Upload file"
                                : "Upload a file"}
                        </span>
                        {fileName
                            ? ""
                            : isSmallScreen
                            ? ""
                            : "  or drag and drop here"}
                    </p>
                    {fileName && (
                        <button
                            className="bg-[#000853] ml-2 text-white flex justify-center items-center duration-300  rounded-full w-6 h-6 text-xs hover:bg-[#ED4545] "
                            onClick={handleFileRemove}
                        >
                            ✖
                        </button>
                    )}
                    <input
                        onChange={handleFileChange}
                        required
                        className="hidden relative m-0 w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal leading-[2.15] text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white"
                        id="formFileLg"
                        type="file"
                    />
                </label>
            </div>
        </fieldset>
    );
};
