import type { editor } from "monaco-editor";

export const editorTheme: editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [
        { token: "comment", foreground: "6A9955" },
        { token: "keyword", foreground: "569CD6" },
        { token: "string", foreground: "CE9178" },
        { token: "number", foreground: "B5CEA8" },
    ],
    colors: {
        "editor.background": "#0f172a",
        "editorLineNumber.foreground": "#475569",
        "editorCursor.foreground": "#e5e7eb",
        "editorIndentGuide.background": "#1e293b",
    },
};
