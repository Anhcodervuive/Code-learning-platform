"use client";

import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import type * as Monaco from "monaco-editor";
import { editorTheme } from "./editor-theme";
import { EditorToolbar } from "./editor-toolbar";
import {
    LANGUAGES,
    type SupportedLanguage,
} from "./languages";

type Props = {
    value: string;
    language: SupportedLanguage;
    onChange: (code: string) => void;
    onLanguageChange: (lang: SupportedLanguage) => void;
    onReset?: () => void;
};

export const CodeEditor = ({
    value,
    language,
    onChange,
    onLanguageChange,
    onReset,
}: Props) => {
    const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        if (!editorRef.current) return;
        editorRef.current?.focus();
    }, []);

    return (
        <div className="flex h-full flex-col rounded-lg border border-border overflow-hidden">
            <EditorToolbar
                language={language}
                onLanguageChange={onLanguageChange}
                onReset={onReset}
            />

            <div className="flex-1">
                <Editor
                    value={value}
                    language={
                        LANGUAGES.find((l) => l.value === language)?.monaco
                    }
                    theme="custom-dark"
                    options={{
                        fontSize: 14,
                        fontFamily:
                            "JetBrains Mono, Fira Code, monospace",
                        minimap: { enabled: false },
                        wordWrap: "on",
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        tabSize: 2,
                    }}
                    onChange={(v) => onChange(v ?? "")}
                    onMount={(editor: Monaco.editor.IStandaloneCodeEditor,
                        monaco: typeof Monaco
                    ) => {
                        monaco.editor.defineTheme(
                            "custom-dark",
                            editorTheme
                        );
                        monaco.editor.setTheme("custom-dark");
                        editorRef.current = editor;
                    }}
                />
            </div>
        </div>
    );
};
