export type SupportedLanguage =
    | "javascript"
    | "typescript"
    | "python"
    | "cpp";

export const LANGUAGES: {
    value: SupportedLanguage;
    label: string;
    monaco: string;
}[] = [
        { value: "javascript", label: "JavaScript", monaco: "javascript" },
        { value: "typescript", label: "TypeScript", monaco: "typescript" },
        { value: "python", label: "Python", monaco: "python" },
        { value: "cpp", label: "C++", monaco: "cpp" },
    ];
