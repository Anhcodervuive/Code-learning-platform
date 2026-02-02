"use client";

import MDEditor from "@uiw/react-md-editor";

type MarkdownEditorProps = {
    value?: string;
    onChange: (value: string) => void;
    height?: number;
    placeholder?: string;
    preview?: "edit" | "live" | "preview";
};

export const MarkdownEditor = ({
    value,
    onChange,
    height = 300,
    placeholder,
    preview = "edit",
}: MarkdownEditorProps) => {
    return (
        <div data-color-mode="dark">
            <MDEditor
                value={value}
                onChange={(v) => onChange(v ?? "")}
                height={height}
                preview={preview}
                textareaProps={{
                    placeholder,
                }}
            />
        </div>
    );
};
