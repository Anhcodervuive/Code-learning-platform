export type SupportedLanguage =
    | "JAVASCRIPT"
    | "PYTHON"
    | "CPP";

export const LANGUAGES: {
    value: SupportedLanguage;
    label: string;
    monaco: string;
}[] = [
        { value: "JAVASCRIPT", label: "JavaScript", monaco: "javascript" },
        { value: "PYTHON", label: "Python", monaco: "python" },
        { value: "CPP", label: "C++", monaco: "cpp" },
    ];
