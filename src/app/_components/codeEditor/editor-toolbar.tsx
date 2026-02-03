"use client";

import {
    LANGUAGES,
    type SupportedLanguage,
} from "./languages";

type Props = {
    language: SupportedLanguage;
    onLanguageChange: (lang: SupportedLanguage) => void;
    onReset?: () => void;
};

export const EditorToolbar = ({
    language,
    onLanguageChange,
    onReset,
}: Props) => {
    return (
        <div className="flex items-center justify-between border-b border-border bg-muted px-3 py-2">
            <select
                value={language}
                onChange={(e) =>
                    onLanguageChange(e.target.value as SupportedLanguage)
                }
                className="rounded-md border border-border bg-background px-2 py-1 text-sm"
            >
                {LANGUAGES.map((l) => (
                    <option key={l.value} value={l.value}>
                        {l.label}
                    </option>
                ))}
            </select>

            {onReset && (
                <button
                    onClick={onReset}
                    className="text-sm text-muted-foreground hover:text-foreground"
                >
                    Reset
                </button>
            )}
        </div>
    );
};
