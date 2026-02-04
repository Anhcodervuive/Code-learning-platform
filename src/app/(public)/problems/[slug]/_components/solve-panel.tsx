"use client";

import { useState } from "react";
import { CodeEditor, type SupportedLanguage } from "~/app/_components/codeEditor";
import { SolveActions } from "./solve-actions";
import { api } from "~/trpc/react";

const DEFAULT_CODE: Record<SupportedLanguage, string> = {
    JAVASCRIPT: "// Write your solution here\n",
    PYTHON: "# Write your solution here\n",
    CPP: "// Write your solution here\n",
};

export const SolvePanel = ({
    problemId,
}: {
    problemId: string;
}) => {
    const [language, setLanguage] =
        useState<SupportedLanguage>("JAVASCRIPT");
    const [code, setCode] = useState(DEFAULT_CODE.JAVASCRIPT);
    const runCodeAPI = api.submission.run.useMutation();

    const handleLanguageChange = (lang: SupportedLanguage) => {
        setLanguage(lang);
        setCode(DEFAULT_CODE[lang]);
    };

    const handleSubmitCode = async () => {
        console.log("RUN", { problemId, language, code });
        await runCodeAPI.mutateAsync({
            mode: 'ATTEMPT',
            problemId,
            language,
            code,
        });
    };


    return (
        <div className="flex h-180 flex-col gap-3">
            <CodeEditor
                value={code}
                language={language}
                onChange={setCode}
                onLanguageChange={handleLanguageChange}
                onReset={() => setCode(DEFAULT_CODE[language])}
            />

            <SolveActions
                onRun={handleSubmitCode}
                onSubmit={() => {
                    console.log("SUBMIT", { problemId, language, code });
                }}
            />
        </div>
    );
};
