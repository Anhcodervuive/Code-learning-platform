import ReactMarkdown from "react-markdown";

type MarkdownRendererProps = {
    content?: string | null;
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
    if (!content) return null;

    return (
        <div className="prose prose-slate dark:prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};
