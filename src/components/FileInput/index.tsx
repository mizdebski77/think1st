interface FileInputProps {
    fileName: string;
    setFileName: (value: string) => void;
    setFile: (file: File | null) => void;
}

export const FileUploader: React.FC<FileInputProps> = ({
    fileName,
    setFileName,
    setFile,
}) => {
    const isSmallScreen = window.innerWidth <= 768;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.currentTarget.files?.[0];
        if (
            selectedFile &&
            ["image/jpeg", "image/png", "image/JPG", "image/PNG"].includes(
                selectedFile.type
            )
        ) {
            setFile(selectedFile);
            setFileName(selectedFile.name);
        } else {
            alert("Please upload a JPG or PNG file.");
        }
    };

    const handleFileRemove = () => {
        setFile(null);
        setFileName("");
    };

    return (
        <fieldset className="grid gap-2">
            <label className="text-primary">Photo</label>
            <div>
                <label
                    htmlFor="formFileLg"
                    className="cursor-pointer bg-white w-full h-24 flex justify-center items-center border rounded-lg border-main"
                >
                    <p className="text-base text-textGrey">
                        <span
                            className={`${
                                fileName
                                    ? "text-primary font-medium mr-2"
                                    : "text-focus underline underline-offset-4"
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
                            onClick={handleFileRemove}
                        >
                            ✖
                        </button>
                    )}
                    <input
                        type="file"
                        id="formFileLg"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                    />
                </label>
            </div>
        </fieldset>
    );
};
