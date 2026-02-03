"use client";

import { useState } from "react";
import { CodeEditor, type SupportedLanguage } from "~/app/_components/codeEditor";
import { SolveActions } from "./solve-actions";

const DEFAULT_CODE: Record<SupportedLanguage, string> = {
    javascript: "// Write your solution here\n",
    typescript: "// Write your solution here\n",
    python: "# Write your solution here\n",
    cpp: "// Write your solution here\n",
};

export const SolvePanel = ({
    problemId,
}: {
    problemId: string;
}) => {
    const [language, setLanguage] =
        useState<SupportedLanguage>("javascript");
    const [code, setCode] = useState(DEFAULT_CODE.javascript);

    const handleLanguageChange = (lang: SupportedLanguage) => {
        setLanguage(lang);
        setCode(DEFAULT_CODE[lang]);
    };

    return (
        <div className="flex h-162.5 flex-col gap-3">
            <SolveActions
                onRun={() => {
                    console.log("RUN", { problemId, language, code });
                }}
                onSubmit={() => {
                    console.log("SUBMIT", { problemId, language, code });
                }}
            />

            <CodeEditor
                value={code}
                language={language}
                onChange={setCode}
                onLanguageChange={handleLanguageChange}
                onReset={() => setCode(DEFAULT_CODE[language])}
            />
        </div>
    );
};
